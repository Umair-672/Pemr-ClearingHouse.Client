import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClaimStatusService } from '../../service/claim-status-service';
import { ClaimStatus } from '../../model/claim-status.model';
import { OutboundClaim } from '../../../outbound-claim/model/outbound-claim.model';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';
import { OutboundClaimService } from '../../../outbound-claim/service/outbound-claim-service';

@Component({
  selector: 'app-claim-status-add-component',
  templateUrl: './claim-status-add-component.html',
  standalone: false
})
export class ClaimStatusAddComponent implements OnInit {
  private fb = inject(FormBuilder);
  private service = inject(ClaimStatusService);
  private outboundClaimService = inject(OutboundClaimService);
  private router = inject(Router);

  form!: FormGroup;
  outboundClaims: OutboundClaim[] = [];

  outboundClaimDropdownConfig: DropdownConfig = {
    displayProperty: 'id',
    valueProperty: 'id',
    placeholder: 'Select outbound claim...',
    searchPlaceholder: 'Search and select outbound claim...',
    noResultsText: 'No outbound claims found',
    icon: 'bi-file-earmark-text',
    maxHeight: '200px',
  };

  ngOnInit(): void {
    this.form = this.fb.group({
      outboundClaimID: ['', Validators.required],
      status: ['', Validators.required],
      responseText: ['', Validators.required]
    });
    this.loadOutboundClaims();
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
      const item: ClaimStatus = this.form.value;
      this.service.create(item).subscribe({
        next: () => {
          this.form.reset();
          this.router.navigate(['/claimStatus']);
        },
        error: (err) => {
          console.error('Error adding claim status:', err);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
