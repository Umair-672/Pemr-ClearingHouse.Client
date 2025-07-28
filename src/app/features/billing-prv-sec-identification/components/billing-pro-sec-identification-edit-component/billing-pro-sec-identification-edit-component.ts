import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BillingProvider } from '../../../billing-provider/model/billingProvider-model';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';
import { BillingProviderService } from '../../../billing-provider/service/billing-provider-service';
import { BillingPrvSecondaryIdentificationService } from '../../service/billing-pro-sec-identification-service';
import { BillingPrvSecondaryIdentification } from '../../model/billing-pro-sec-identification.model';

@Component({
  selector: 'app-billing-pro-sec-identification-edit-component',
  templateUrl: './billing-pro-sec-identification-edit-component.html',
  standalone: false
})
export class BillingProSecIdentificationEditComponent implements OnInit {
  form!: FormGroup;
  itemId!: string;
  loading = false;
  billingProviders: BillingProvider[] = [];

  constructor(
    private fb: FormBuilder,
    private service: BillingPrvSecondaryIdentificationService,
    private billingProviderService: BillingProviderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id') || '';
    this.form = this.fb.group({
      billingProviderID: ['', Validators.required],
      qualifier: ['', Validators.required],
      value: ['', Validators.required]
    });
    this.loadBillingProviders();
    if (this.itemId) {
      this.loading = true;
      this.service.getById(this.itemId).subscribe({
        next: (item: BillingPrvSecondaryIdentification) => {
          this.form.patchValue(item);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
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
      const updatedItem = this.form.value;
      this.service.update(this.itemId, updatedItem).subscribe({
        next: () => {
          this.router.navigate(['/billingPrvSecIdentification']);
        },
        error: (err) => {
          console.error('Error updating billing pro sec identification:', err);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
