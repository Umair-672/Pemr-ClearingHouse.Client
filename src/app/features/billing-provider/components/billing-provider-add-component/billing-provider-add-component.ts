import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BillingProviderService } from '../../service/billing-provider-service';
import { BillingProvider } from '../../model/billingProvider-model';

@Component({
  selector: 'app-billing-provider-add-component',
  standalone: false,
  templateUrl: './billing-provider-add-component.html',
  styleUrl: './billing-provider-add-component.scss'
})
export class BillingProviderAddComponent implements OnInit {
  billingProviderForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private billingProviderService: BillingProviderService,
    private router: Router
  ) {}

  ngOnInit(): void {
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
  }

  onSubmit(): void {
    if (this.billingProviderForm.valid) {
      const provider: BillingProvider = this.billingProviderForm.value;
      this.billingProviderService.create(provider).subscribe({
        next: () => {
           this.billingProviderForm.reset();
           this.router.navigate(['/billing-provider']);
        },
        error: err => {
          // Handle error (show message, etc.)
          console.error('Error creating billing provider:', err);
        }
      });
    }else{
      this.billingProviderForm.markAllAsTouched(); // Mark all fields as touched to show validation errors
    }
  }
}
