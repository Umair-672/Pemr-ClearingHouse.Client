import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaytoAddressService } from '../../service/payto-address-service';
import { Router } from '@angular/router';
import { PaytoAddress } from '../../model/payto-address.model';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';
import { InboundTransaction } from '../../../inbound-transaction/model/inboundTransaction';
import { InboundTransactionService } from '../../../inbound-transaction/service/inboundTransaction-service';

@Component({
  selector: 'app-payto-address-form-add-component',
  templateUrl: './payto-address-form-add-component.html',
  standalone: false
})
export class PaytoAddressFormAddComponent implements OnInit {
  paytoAddressForm!: FormGroup;
  inboundTransactions: InboundTransaction[] = [];

  inboundTransactionDropdownConfig: DropdownConfig = {
    displayProperty: 'id',
    valueProperty: 'id',
    placeholder: 'Select inbound transaction...',
    searchPlaceholder: 'Search and select inbound transaction...',
    noResultsText: 'No inbound transactions found',
    icon: 'bi-arrow-down-circle',
    maxHeight: '200px',
  };

  constructor(
    private fb: FormBuilder,
    private paytoAddressService: PaytoAddressService,
    private inboundTransactionService: InboundTransactionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.paytoAddressForm = this.fb.group({
      inboundTransactionID: ['', Validators.required],
      entityTypeQualifier: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required]
    });
    this.loadInboundTransactions();
  }

  loadInboundTransactions(): void {
    this.inboundTransactionService.getAll().subscribe(inboundTransactions => this.inboundTransactions = inboundTransactions);
  }

  onInboundTransactionSelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedInboundTransaction = selectedOption as InboundTransaction;
      this.paytoAddressForm.get('inboundTransactionID')?.setValue(selectedInboundTransaction.id);
    } else {
      this.paytoAddressForm.get('inboundTransactionID')?.setValue('');
    }
  }

  onSubmit(): void {
    if (this.paytoAddressForm.valid) {
      const paytoAddress: PaytoAddress = this.paytoAddressForm.value;
      this.paytoAddressService.create(paytoAddress).subscribe({
        next: () => {
          this.paytoAddressForm.reset();
          this.router.navigate(['/paytoAddress']);
        },
        error: (err) => {
          console.error('Error adding payto address:', err);
        }
      });
    } else {
      this.paytoAddressForm.markAllAsTouched();
    }
  }
}
