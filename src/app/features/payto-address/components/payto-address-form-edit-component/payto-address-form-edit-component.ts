import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaytoAddressService } from '../../service/payto-address-service';
import { PaytoAddress } from '../../model/payto-address.model';
import { InboundTransactionService } from '../../../inbound-transaction/service/inboundTransaction-service';
import { InboundTransaction } from '../../../inbound-transaction/model/inboundTransaction';

@Component({
  selector: 'app-payto-address-form-edit-component',
  templateUrl: './payto-address-form-edit-component.html',
  standalone: false
})
export class PaytoAddressFormEditComponent implements OnInit {
  paytoAddressForm!: FormGroup;
  paytoAddressId!: string;
  inboundTransactions: InboundTransaction[] = [];
  loading = false;

  constructor(
    private fb: FormBuilder,
    private paytoAddressService: PaytoAddressService,
    private inboundTransactionService: InboundTransactionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.paytoAddressId = this.route.snapshot.paramMap.get('id') || '';
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
    if (this.paytoAddressId) {
      this.loading = true;
      this.paytoAddressService.getById(this.paytoAddressId).subscribe({
        next: (paytoAddress: PaytoAddress) => {
          this.paytoAddressForm.patchValue(paytoAddress);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  loadInboundTransactions(): void {
    this.inboundTransactionService.getAll().subscribe(inboundTransactions => this.inboundTransactions = inboundTransactions);
  }

  getSelectedInboundTransactionName(): string {
    const selectedId = this.paytoAddressForm.get('inboundTransactionID')?.value;
    return this.inboundTransactions.find(i => i.id === selectedId)?.id ?? '';
  }

  onSubmit(): void {
    if (this.paytoAddressForm.valid) {
      const updatedPaytoAddress = this.paytoAddressForm.value;
      this.paytoAddressService.update(this.paytoAddressId, updatedPaytoAddress).subscribe({
        next: () => {
          this.router.navigate(['/paytoAddress']);
        },
        error: (err) => {
          console.error('Error updating payto address:', err);
        }
      });
    } else {
      this.paytoAddressForm.markAllAsTouched();
    }
  }
}
