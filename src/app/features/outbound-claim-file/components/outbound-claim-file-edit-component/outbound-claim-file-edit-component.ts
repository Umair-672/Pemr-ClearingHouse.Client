import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OutboundClaimFileService } from '../../service/outbound-claim-file-service';
import { OutboundClaimFile } from '../../model/outbound-claim-file.model';

@Component({
  selector: 'app-outbound-claim-file-edit-component',
  templateUrl: './outbound-claim-file-edit-component.html',
  standalone: false
})
export class OutboundClaimFileEditComponent implements OnInit {
  private fb = inject(FormBuilder);
  private service = inject(OutboundClaimFileService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  form!: FormGroup;
  itemId!: string;
  loading = false;

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id') || '';
    this.form = this.fb.group({
      name: ['', Validators.required],
      submissionDate: ['', Validators.required],
      submitterID: ['', Validators.required],
      receiverID: ['', Validators.required],
      interchangeCtrlNo: ['', Validators.required],
      noOfClaims: ['', [Validators.required, Validators.min(1)]]
    });
    if (this.itemId) {
      this.loading = true;
      this.service.getById(this.itemId).subscribe({
        next: (item: OutboundClaimFile) => {
          this.form.patchValue(item);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const updatedItem = this.form.value;
      this.service.update(this.itemId, updatedItem).subscribe({
        next: () => {
          this.router.navigate(['/outboundClaimFile']);
        },
        error: (err) => {
          console.error('Error updating outbound claim file:', err);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
