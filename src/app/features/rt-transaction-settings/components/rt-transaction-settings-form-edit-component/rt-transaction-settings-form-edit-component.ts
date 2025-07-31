import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RTTransactionSettingsService } from '../../service/rt-transaction-settings-service';
import { RTTransactionSettings } from '../../model/rt-transaction-settings.model';
import { TransactionRoute } from '../../../transaction-route/model/transaction-route.model';
import { TransactionRouteService } from '../../../transaction-route/service/transaction-route-service';

@Component({
  selector: 'app-rt-transaction-settings-form-edit-component',
  templateUrl: './rt-transaction-settings-form-edit-component.html',
  standalone: false
})
export class RTTransactionSettingsFormEditComponent implements OnInit {
  rtTransactionSettingsForm!: FormGroup;
  rtTransactionSettingsId!: string;
  transactionRoutes: TransactionRoute[] = [];
  loading = false;

  constructor(
    private fb: FormBuilder,
    private rtTransactionSettingsService: RTTransactionSettingsService,
    private transactionRouteService: TransactionRouteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.rtTransactionSettingsId = this.route.snapshot.paramMap.get('id') || '';
    this.rtTransactionSettingsForm = this.fb.group({
      transactionRouteID: ['', Validators.required],
      uri: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loadTransactionRoutes();
    if (this.rtTransactionSettingsId) {
      this.loading = true;
      this.rtTransactionSettingsService.getById(this.rtTransactionSettingsId).subscribe({
        next: (rtTransactionSettings: RTTransactionSettings) => {
          this.rtTransactionSettingsForm.patchValue(rtTransactionSettings);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  loadTransactionRoutes(): void {
    this.transactionRouteService.getAll().subscribe(transactionRoutes => this.transactionRoutes = transactionRoutes);
  }

  getSelectedTransactionRouteName(): string {
    const selectedId = this.rtTransactionSettingsForm.get('transactionRouteID')?.value;
    return this.transactionRoutes.find(t => t.id === selectedId)?.authInfo ?? '';
  }

  onSubmit(): void {
    if (this.rtTransactionSettingsForm.valid) {
      const updatedRTTransactionSettings = this.rtTransactionSettingsForm.value;
      this.rtTransactionSettingsService.update(this.rtTransactionSettingsId, updatedRTTransactionSettings).subscribe({
        next: () => {
          this.router.navigate(['/rt-transaction-settings']);
        },
        error: (err) => {
          console.error('Error updating RT transaction settings:', err);
        }
      });
    } else {
      this.rtTransactionSettingsForm.markAllAsTouched();
    }
  }
}
