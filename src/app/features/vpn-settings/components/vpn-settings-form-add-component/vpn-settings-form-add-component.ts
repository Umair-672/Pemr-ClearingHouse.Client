import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VPNSettingsService } from '../../service/vpn-settings-service';
import { GatewayService } from '../../../gateway/service/gateway-service';
import { Router } from '@angular/router';
import { VPNSettings } from '../../model/vpn-settings.model';
import { Gateway } from '../../../gateway/model/gateway.model';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';

@Component({
  selector: 'app-vpn-settings-form-add-component',
  templateUrl: './vpn-settings-form-add-component.html',
  standalone: false
})
export class VPNSettingsFormAddComponent implements OnInit {
  vpnSettingsForm!: FormGroup;
  gateways: Gateway[] = [];

  vpnSettingsDropdownConfig: DropdownConfig = {
    displayProperty: 'name',
    valueProperty: 'id',
    placeholder: 'Select gateway...',
    searchPlaceholder: 'Search and select gateway...',
    noResultsText: 'No gateways found',
    icon: 'bi-hdd-network',
    maxHeight: '200px',
  };

  constructor(
    private fb: FormBuilder,
    private vpnSettingsService: VPNSettingsService,
    private gatewayService: GatewayService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.vpnSettingsForm = this.fb.group({
      gatewayID: ['', Validators.required],
      connectionName: ['', Validators.required],
      ipAddress: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      isActive: [true],
      isDeleted: [false]
    });
    this.loadGateways();
  }

  loadGateways(): void {
    this.gatewayService.getAll().subscribe(gateways => this.gateways = gateways);
  }

  onGatewaySelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedGateway = selectedOption as Gateway;
      this.vpnSettingsForm.get('gatewayID')?.setValue(selectedGateway.id);
    } else {
      this.vpnSettingsForm.get('gatewayID')?.setValue('');
    }
  }

  onSubmit(): void {
    if (this.vpnSettingsForm.valid) {
      const vpnSettings: VPNSettings = this.vpnSettingsForm.value;
      this.vpnSettingsService.create(vpnSettings).subscribe({
        next: () => {
          this.vpnSettingsForm.reset();
          this.router.navigate(['/vpn-settings']);
        },
        error: (err) => {
          console.error('Error adding vpn settings:', err);
        }
      });
    } else {
      this.vpnSettingsForm.markAllAsTouched();
    }
  }
}
