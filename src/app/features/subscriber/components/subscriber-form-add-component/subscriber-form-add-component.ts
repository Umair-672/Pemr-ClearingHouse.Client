import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubscriberService } from '../../service/subscriber-service';
import { Subscriber } from '../../model/subscriber.model';
import { BillingProvider } from '../../../billing-provider/model/billingProvider-model';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';
import { BillingProviderService } from '../../../billing-provider/service/billing-provider-service';

@Component({
  selector: 'app-subscriber-form-add-component',
  templateUrl: './subscriber-form-add-component.html',
  standalone: false
})
export class SubscriberFormAddComponent implements OnInit {
  subscriberForm!: FormGroup;
  billingProviders: BillingProvider[] = [];

  billingProviderDropdownConfig: DropdownConfig ={
    displayProperty: 'entityTypeQualifier',
    valueProperty: 'id',
    placeholder: 'Select billing provider...',
    searchPlaceholder: 'Search and select billing provider...',
    noResultsText: 'No billing providers found',
    icon: 'bi-file-earmark-text',
    maxHeight: '200px',
  };

  constructor(
    private fb: FormBuilder,
    private subscriberService: SubscriberService,
    private billingProviderService: BillingProviderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscriberForm = this.fb.group({
      billingProviderID: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: [''],
      primaryIdentification: ['', Validators.required],
      address1: [''],
      address2: [''],
      city: [''],
      state: [''],
      zipCode: [''],
      secondaryIdentification: [''],
      payerResponsibility: [''],
      relationshipCode: [''],
      insuranceTypeCode: [''],
      claimFilingIndicator: [''],
      gender: [''],
      dob: ['', Validators.required]
    });
    this.loadBillingProviders();
  }

  loadBillingProviders(): void {
    this.billingProviderService.getAll().subscribe({
      next: (providers: BillingProvider[]) => {
        this.billingProviders = providers;
      },
      error: err => {
        // Handle error (show message, etc.)
      }
    });
  }

  onProviderSelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedProvider = selectedOption as BillingProvider;
      this.subscriberForm.get('billingProviderID')?.setValue(selectedProvider.id);
    } else {
      this.subscriberForm.get('billingProviderID')?.setValue(null);
    }
  }

  onSubmit(): void {
    if (this.subscriberForm.valid) {
      const subscriber: Subscriber = this.subscriberForm.value;
      this.subscriberService.create(subscriber).subscribe({
        next: () => {
          this.subscriberForm.reset();
          this.router.navigate(['/subscriber']);
        },
        error: (err) => {
          console.error('Error adding subscriber:', err);
        }
      });
    } else {
      this.subscriberForm.markAllAsTouched();
    }
  }
}
