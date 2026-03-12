import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OutboundClaimService } from '../../service/outbound-claim-service';
import { OutboundClaim } from '../../model/outbound-claim.model';
import { OutboundTransaction } from '../../../outbound-transaction/model/outbound-transaction.model';
import { Claim } from '../../../claim/model/claim.model';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';
import { ClaimService } from '../../../claim/service/claim-service';
import { OutboundTransactionService } from '../../../outbound-transaction/service/outbound-transaction-service';

@Component({
  selector: 'app-outbound-claim-add-component',
  templateUrl: './outbound-claim-add-component.html',
  standalone: false
})
export class OutboundClaimAddComponent implements OnInit {
  form!: FormGroup;
  outboundTransactions: OutboundTransaction[] = [];
  claims: Claim[] = [];

  outboundTransactionDropdownConfig: DropdownConfig = {
    displayProperty: 'versionName',
    valueProperty: 'id',
    placeholder: 'Select outbound transaction...',
    searchPlaceholder: 'Search and select outbound transaction...',
    noResultsText: 'No outbound transactions found',
    icon: 'bi-arrow-right',
    maxHeight: '200px',
  };

  claimDropdownConfig: DropdownConfig = {
    displayProperty: 'patientControlNumber',
    valueProperty: 'id',
    placeholder: 'Select claim...',
    searchPlaceholder: 'Search and select claim...',
    noResultsText: 'No claims found',
    icon: 'bi-file-earmark-text',
    maxHeight: '200px',
  };

  constructor(
    private fb: FormBuilder,
    private service: OutboundClaimService,
    private outboundTransactionService: OutboundTransactionService,
    private claimService: ClaimService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      outboundTransactionID: ['', Validators.required],
      claimID: ['', Validators.required]
    });
    this.loadOutboundTransactions();
    this.loadClaims();
  }

  loadOutboundTransactions(): void {
    this.outboundTransactionService.getAll().subscribe({
      next: (transactions: OutboundTransaction[]) => {
        this.outboundTransactions = transactions;
      },
      error: err => {
        // Handle error (show message, etc.)
      }
    });
  }

  loadClaims(): void {
    this.claimService.getAll().subscribe({
      next: (claims: Claim[]) => {
        this.claims = claims;
      },
      error: err => {
        // Handle error (show message, etc.)
      }
    });
  }

  onOutboundTransactionSelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedTransaction = selectedOption as OutboundTransaction;
      this.form.get('outboundTransactionID')?.setValue(selectedTransaction.id);
    } else {
      this.form.get('outboundTransactionID')?.setValue(null);
    }
  }

  onClaimSelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedClaim = selectedOption as Claim;
      this.form.get('claimID')?.setValue(selectedClaim.id);
    } else {
      this.form.get('claimID')?.setValue(null);
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const item: OutboundClaim = this.form.value;
      this.service.create(item).subscribe({
        next: () => {
          this.form.reset();
          this.router.navigate(['/outboundClaim']);
        },
        error: (err) => {
          console.error('Error adding outbound claim:', err);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
