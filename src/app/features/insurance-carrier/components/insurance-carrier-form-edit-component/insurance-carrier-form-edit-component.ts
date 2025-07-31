import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InsuranceCarrierService } from '../../service/insurance-carrier-service';
import { InsuranceService } from '../../../insurance/service/insurance-service';
import { DialupSettingsService } from '../../../dialup-settings/service/dialup-settings-service';
import { InsuranceCarrier } from '../../model/insurance-carrier.model';
import { Insurance } from '../../../insurance/model/insurance.model';
import { DialupSettings } from '../../../dialup-settings/model/dialup-settings.model';

@Component({
  selector: 'app-insurance-carrier-form-edit-component',
  templateUrl: './insurance-carrier-form-edit-component.html',
  standalone: false
})
export class InsuranceCarrierFormEditComponent implements OnInit {
  insuranceCarrierForm!: FormGroup;
  insuranceCarrierId!: string;
  insurances: Insurance[] = [];
  dialupSettings: DialupSettings[] = [];
  loading = false;

  constructor(
    private fb: FormBuilder,
    private insuranceCarrierService: InsuranceCarrierService,
    private insuranceService: InsuranceService,
    private dialupSettingsService: DialupSettingsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.insuranceCarrierId = this.route.snapshot.paramMap.get('id') || '';
    this.insuranceCarrierForm = this.fb.group({
      insuranceID: ['', Validators.required],
      dialupSettingID: ['', Validators.required],
      displayName: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      state: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      phone: ['', Validators.required],
      fax: [''],
      email: ['', Validators.required],
      url: [''],
      acceptSecondaryClaim: [false],
      acceptCorrectedClaim: [false],
      claimFilingLimit: [0, Validators.required],
      appealFilingLimit: [0, Validators.required],
      isActive: [true],
      isDeleted: [false]
    });
    this.loadInsurances();
    this.loadDialupSettings();
    if (this.insuranceCarrierId) {
      this.loading = true;
      this.insuranceCarrierService.getById(this.insuranceCarrierId).subscribe({
        next: (insuranceCarrier: InsuranceCarrier) => {
          this.insuranceCarrierForm.patchValue(insuranceCarrier);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  loadInsurances(): void {
    this.insuranceService.getAll().subscribe(insurances => this.insurances = insurances);
  }

  loadDialupSettings(): void {
    this.dialupSettingsService.getAll().subscribe(dialupSettings => this.dialupSettings = dialupSettings);
  }

  getSelectedInsuranceName(): string {
    const selectedId = this.insuranceCarrierForm.get('insuranceID')?.value;
    return this.insurances.find(i => i.id === selectedId)?.name ?? '';
  }

  getSelectedDialupSettingName(): string {
    const selectedId = this.insuranceCarrierForm.get('dialupSettingID')?.value;
    return this.dialupSettings.find(d => d.id === selectedId)?.connectionName ?? '';
  }

  onSubmit(): void {
    if (this.insuranceCarrierForm.valid) {
      const updatedInsuranceCarrier = this.insuranceCarrierForm.value;
      this.insuranceCarrierService.update(this.insuranceCarrierId, updatedInsuranceCarrier).subscribe({
        next: () => {
          this.router.navigate(['/insurance-carrier']);
        },
        error: (err) => {
          console.error('Error updating insurance carrier:', err);
        }
      });
    } else {
      this.insuranceCarrierForm.markAllAsTouched();
    }
  }
} 