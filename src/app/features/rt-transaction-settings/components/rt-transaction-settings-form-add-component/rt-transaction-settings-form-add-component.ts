import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RTTransactionSettingsService } from '../../service/rt-transaction-settings-service';
import { Router } from '@angular/router';
import { RTTransactionSettings } from '../../model/rt-transaction-settings.model';
import { TransactionRoute } from '../../../transaction-route/model/transaction-route.model';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';
import { TransactionRouteService } from '../../../transaction-route/service/transaction-route-service';

@Component({
  selector: 'app-rt-transaction-settings-form-add-component',
  templateUrl: './rt-transaction-settings-form-add-component.html',
  standalone: false
})
export class RTTransactionSettingsFormAddComponent implements OnInit {
  rtTransactionSettingsForm!: FormGroup;
  transactionRoutes: TransactionRoute[] = [];

  transactionRouteDropdownConfig: DropdownConfig = {
    displayProperty: 'name',
    valueProperty: 'id',
    placeholder: 'Select transaction route...',
    searchPlaceholder: 'Search and select transaction route...',
    noResultsText: 'No transaction routes found',
    icon: 'bi-arrow-left-right',
    maxHeight: '200px',
  };

  constructor(
    private fb: FormBuilder,
    private rtTransactionSettingsService: RTTransactionSettingsService,
    private transactionRouteService: TransactionRouteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.rtTransactionSettingsForm = this.fb.group({
      transactionRouteID: ['', Validators.required],
      uri: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loadTransactionRoutes();
  }

  loadTransactionRoutes(): void {
    this.transactionRouteService.getAll().subscribe(transactionRoutes => this.transactionRoutes = transactionRoutes);
  }

  onTransactionRouteSelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedTransactionRoute = selectedOption as TransactionRoute;
      this.rtTransactionSettingsForm.get('transactionRouteID')?.setValue(selectedTransactionRoute.id);
    } else {
      this.rtTransactionSettingsForm.get('transactionRouteID')?.setValue('');
    }
  }

  onSubmit(): void {
    if (this.rtTransactionSettingsForm.valid) {
      const rtTransactionSettings: RTTransactionSettings = this.rtTransactionSettingsForm.value;
      this.rtTransactionSettingsService.create(rtTransactionSettings).subscribe({
        next: () => {
          this.rtTransactionSettingsForm.reset();
          this.router.navigate(['/rt-transaction-settings']);
        },
        error: (err) => {
          console.error('Error adding RT transaction settings:', err);
        }
      });
    } else {
      this.rtTransactionSettingsForm.markAllAsTouched();
    }
  }
}
