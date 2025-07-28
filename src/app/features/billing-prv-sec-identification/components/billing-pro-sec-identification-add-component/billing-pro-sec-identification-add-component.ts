import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BillingProvider } from '../../../billing-provider/model/billingProvider-model';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';
import { BillingProviderService } from '../../../billing-provider/service/billing-provider-service';
import { BillingPrvSecondaryIdentificationService } from '../../service/billing-pro-sec-identification-service';
import { BillingPrvSecondaryIdentification } from '../../model/billing-pro-sec-identification.model';

@Component({
  selector: 'app-billing-pro-sec-identification-add-component',
  templateUrl: './billing-pro-sec-identification-add-component.html',
  standalone: false
})
export class BillingProSecIdentificationAddComponent implements OnInit {
  form!: FormGroup;
  billingProviders: BillingProvider[] = [];

  billingProviderDropdownConfig: DropdownConfig = {
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
    private service: BillingPrvSecondaryIdentificationService,
    private billingProviderService: BillingProviderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      billingProviderID: ['', Validators.required],
      qualifier: ['', Validators.required],
      value: ['', Validators.required]
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
      this.form.get('billingProviderID')?.setValue(selectedProvider.id);
    } else {
      this.form.get('billingProviderID')?.setValue(null);
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const item: BillingPrvSecondaryIdentification = this.form.value;
      this.service.create(item).subscribe({
        next: () => {
          this.form.reset();
          this.router.navigate(['/billingPrvSecIdentification']);
        },
        error: (err) => {
          console.error('Error adding billing pro sec identification:', err);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
