import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InsuranceCarrierService } from '../../service/insurance-carrier-service';
import { InsuranceService } from '../../../insurance/service/insurance-service';
import { DialupSettingsService } from '../../../dialup-settings/service/dialup-settings-service';
import { Router } from '@angular/router';
import { InsuranceCarrier } from '../../model/insurance-carrier.model';
import { Insurance } from '../../../insurance/model/insurance.model';
import { DialupSettings } from '../../../dialup-settings/model/dialup-settings.model';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';

@Component({
  selector: 'app-insurance-carrier-form-add-component',
  templateUrl: './insurance-carrier-form-add-component.html',
  standalone: false
})
export class InsuranceCarrierFormAddComponent implements OnInit {
  insuranceCarrierForm!: FormGroup;
  insurances: Insurance[] = [];
  dialupSettings: DialupSettings[] = [];

  insuranceDropdownConfig: DropdownConfig = {
    displayProperty: 'name',
    valueProperty: 'id',
    placeholder: 'Select insurance...',
    searchPlaceholder: 'Search and select insurance...',
    noResultsText: 'No insurances found',
    icon: 'bi-shield-check',
    maxHeight: '200px',
  };

  dialupSettingsDropdownConfig: DropdownConfig = {
    displayProperty: 'connectionName',
    valueProperty: 'id',
    placeholder: 'Select dialup setting...',
    searchPlaceholder: 'Search and select dialup setting...',
    noResultsText: 'No dialup settings found',
    icon: 'bi-modem',
    maxHeight: '200px',
  };

  constructor(
    private fb: FormBuilder,
    private insuranceCarrierService: InsuranceCarrierService,
    private insuranceService: InsuranceService,
    private dialupSettingsService: DialupSettingsService,
    private router: Router
  ) { }

  ngOnInit(): void {
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
  }

  loadInsurances(): void {
    this.insuranceService.getAll().subscribe(insurances => this.insurances = insurances);
  }

  loadDialupSettings(): void {
    this.dialupSettingsService.getAll().subscribe(dialupSettings => this.dialupSettings = dialupSettings);
  }

  onInsuranceSelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedInsurance = selectedOption as Insurance;
      this.insuranceCarrierForm.get('insuranceID')?.setValue(selectedInsurance.id);
    } else {
      this.insuranceCarrierForm.get('insuranceID')?.setValue('');
    }
  }

  onDialupSettingSelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedDialupSetting = selectedOption as DialupSettings;
      this.insuranceCarrierForm.get('dialupSettingID')?.setValue(selectedDialupSetting.id);
    } else {
      this.insuranceCarrierForm.get('dialupSettingID')?.setValue('');
    }
  }

  onSubmit(): void {
    if (this.insuranceCarrierForm.valid) {
      const insuranceCarrier: InsuranceCarrier = this.insuranceCarrierForm.value;
      this.insuranceCarrierService.create(insuranceCarrier).subscribe({
        next: () => {
          this.insuranceCarrierForm.reset();
          this.router.navigate(['/insurance-carrier']);
        },
        error: (err) => {
          console.error('Error adding insurance carrier:', err);
        }
      });
    } else {
      this.insuranceCarrierForm.markAllAsTouched();
    }
  }
} 