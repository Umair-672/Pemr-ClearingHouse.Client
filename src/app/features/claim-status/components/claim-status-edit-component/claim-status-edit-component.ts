import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClaimStatusService } from '../../service/claim-status-service';
import { ClaimStatus } from '../../model/claim-status.model';
import { OutboundClaim } from '../../../outbound-claim/model/outbound-claim.model';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';
import { OutboundClaimService } from '../../../outbound-claim/service/outbound-claim-service';

@Component({
  selector: 'app-claim-status-edit-component',
  templateUrl: './claim-status-edit-component.html',
  standalone: false
})
export class ClaimStatusEditComponent implements OnInit {
  private fb = inject(FormBuilder);
  private service = inject(ClaimStatusService);
  private outboundClaimService = inject(OutboundClaimService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  form!: FormGroup;
  itemId!: string;
  loading = false;
  outboundClaims: OutboundClaim[] = [];

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id') || '';
    this.form = this.fb.group({
      outboundClaimID: ['', Validators.required],
      status: ['', Validators.required],
      responseText: ['', Validators.required]
    });
    this.loadOutboundClaims();
    if (this.itemId) {
      this.loading = true;
      this.service.getById(this.itemId).subscribe({
        next: (item: ClaimStatus) => {
          this.form.patchValue(item);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  loadOutboundClaims(): void {
    this.outboundClaimService.getAll().subscribe({
      next: (claims: OutboundClaim[]) => {
        this.outboundClaims = claims;
      },
      error: (err: any) => {
        // Handle error (show message, etc.)
      }
    });
  }

  onOutboundClaimSelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedClaim = selectedOption as OutboundClaim;
      this.form.get('outboundClaimID')?.setValue(selectedClaim.id);
    } else {
      this.form.get('outboundClaimID')?.setValue(null);
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const updatedItem = this.form.value;
      this.service.update(this.itemId, updatedItem).subscribe({
        next: () => {
          this.router.navigate(['/claimStatus']);
        },
        error: (err) => {
          console.error('Error updating claim status:', err);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
