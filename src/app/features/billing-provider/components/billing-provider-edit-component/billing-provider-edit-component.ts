import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BillingProviderService } from '../../service/billing-provider-service';
import { BillingProvider } from '../../model/billingProvider-model';
import { InboundTransaction } from '../../../inbound-transaction/model/inboundTransaction';
import { InboundTransactionService } from '../../../inbound-transaction/service/inboundTransaction-service';

@Component({
  selector: 'app-billing-provider-edit-component',
  standalone: false,
  templateUrl: './billing-provider-edit-component.html',
  styleUrl: './billing-provider-edit-component.scss'
})
export class BillingProviderEditComponent implements OnInit {
  billingProviderForm!: FormGroup;
  providerId!: string;
  inboundTransactions: InboundTransaction[] = [];
  loading = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private billingProviderService: BillingProviderService,
    private inboundTransactionService: InboundTransactionService
  ) {}

  ngOnInit(): void {
    this.providerId = this.route.snapshot.paramMap.get('id') || '';
    this.billingProviderForm = this.fb.group({
      inboundTransactionID: ['', Validators.required],
      entityTypeQualifier: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: [''],
      npi: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      taxonomyCode: ['', Validators.required]
    });

      this.loadBillingProvider();
  }

    loadBillingProvider(): void {
      this.loading = true;
      this.billingProviderService.getById(this.providerId).subscribe({
        next: (provider: BillingProvider) => {
          this.billingProviderForm.patchValue(provider);
          this.loading = false;
        },
        error: err => {
          // Handle error (show message, etc.)
          this.loading = false;
        }
      });
    }
  onSubmit(): void {
    if (this.billingProviderForm.valid && this.providerId) {
      const updatedProvider: BillingProvider = {
        ...this.billingProviderForm.value,
        inboundTransactionID: this.providerId
      };
      this.billingProviderService.update(this.providerId, updatedProvider).subscribe({
        next: () => this.router.navigate(['/billing-provider']),
        error: err => {
          // Handle error (show message, etc.)
          console.error('Error updating billing provider:', err);
        }
      });
    }
    else {
      this.billingProviderForm.markAllAsTouched();
    }
  }
}
