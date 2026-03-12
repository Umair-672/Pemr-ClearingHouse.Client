import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InboundClaimFile } from '../../model/inbound-claim-file-model';
import { InboundClaimFileService } from '../../service/inbound-claim-file-service';

@Component({
  selector: 'app-inbound-claim-file-add-component',
  standalone: false,
  templateUrl: './inbound-claim-file-add-component.html',
  styleUrl: './inbound-claim-file-add-component.scss'
})
export class InboundClaimFileAddComponent implements OnInit {
  inboundClaimFileForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private inboundClaimFileService: InboundClaimFileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inboundClaimFileForm = this.fb.group({
      name: ['', Validators.required],
      receivedDate: ['', Validators.required],
      submitterID: ['', Validators.required],
      receiverID: ['', Validators.required],
      siteID: ['', Validators.required],
      interchangeCtrlNo: ['', Validators.required],
      noOfClaims: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.inboundClaimFileForm.valid) {
      const inboundClaimFile: InboundClaimFile = {
        ...this.inboundClaimFileForm.value,
        receivedDate: new Date(this.inboundClaimFileForm.value.receivedDate)
      };
      
      this.inboundClaimFileService.create(inboundClaimFile).subscribe({
        next: () => {
          this.inboundClaimFileForm.reset();
          this.router.navigate(['/inbound-claim-file']);
        },
        error: (err) => {
          console.error('Error adding inbound claim file:', err);
        }
      });
    } else {
      this.inboundClaimFileForm.markAllAsTouched();
    }
  }
}
