import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InboundClaimFile } from '../../model/inbound-claim-file-model';
import { InboundClaimFileService } from '../../service/inbound-claim-file-service';

@Component({
  selector: 'app-inbound-claim-file-edit-component',
  standalone: false,
  templateUrl: './inbound-claim-file-edit-component.html',
  styleUrl: './inbound-claim-file-edit-component.scss'
})
export class InboundClaimFileEditComponent implements OnInit {
  inboundClaimFileForm!: FormGroup;
  inboundClaimFileId!: string;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private inboundClaimFileService: InboundClaimFileService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inboundClaimFileId = this.route.snapshot.paramMap.get('id') || '';
    this.inboundClaimFileForm = this.fb.group({
      name: ['', Validators.required],
      receivedDate: ['', Validators.required],
      submitterID: ['', Validators.required],
      receiverID: ['', Validators.required],
      siteID: ['', Validators.required],
      interchangeCtrlNo: ['', Validators.required],
      noOfClaims: [0, [Validators.required, Validators.min(0)]]
    });

    if (this.inboundClaimFileId) {
      this.loadInboundClaimFile();
    }
  }

  loadInboundClaimFile(): void {
    this.loading = true;
    this.inboundClaimFileService.getById(this.inboundClaimFileId).subscribe({
      next: (inboundClaimFile: InboundClaimFile) => {
        // Format the date for datetime-local input
        const formattedDate = new Date(inboundClaimFile.receivedDate).toISOString().slice(0, 16);

        this.inboundClaimFileForm.patchValue({
          ...inboundClaimFile,
          receivedDate: formattedDate
        });
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        console.error('Error loading inbound claim file');
      }
    });
  }

  onSubmit(): void {
    if (this.inboundClaimFileForm.valid) {
      const updatedInboundClaimFile: InboundClaimFile = {
        ...this.inboundClaimFileForm.value,
        receivedDate: new Date(this.inboundClaimFileForm.value.receivedDate)
      };

      this.inboundClaimFileService.update(this.inboundClaimFileId, updatedInboundClaimFile).subscribe({
        next: () => {
          this.router.navigate(['/inbound-claim-file']);
        },
        error: (err) => {
          console.error('Error updating inbound claim file:', err);
        }
      });
    } else {
      this.inboundClaimFileForm.markAllAsTouched();
    }
  }
}
