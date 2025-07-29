import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OutboundClaimFileService } from '../../service/outbound-claim-file-service';
import { OutboundClaimFile } from '../../model/outbound-claim-file.model';

@Component({
  selector: 'app-outbound-claim-file-add-component',
  templateUrl: './outbound-claim-file-add-component.html',
  standalone: false
})
export class OutboundClaimFileAddComponent implements OnInit {
  private fb = inject(FormBuilder);
  private service = inject(OutboundClaimFileService);
  private router = inject(Router);

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      submissionDate: ['', Validators.required],
      submitterID: ['', Validators.required],
      receiverID: ['', Validators.required],
      interchangeCtrlNo: ['', Validators.required],
      noOfClaims: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const item: OutboundClaimFile = this.form.value;
      this.service.create(item).subscribe({
        next: () => {
          this.form.reset();
          this.router.navigate(['/outboundClaimFile']);
        },
        error: (err) => {
          console.error('Error adding outbound claim file:', err);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
