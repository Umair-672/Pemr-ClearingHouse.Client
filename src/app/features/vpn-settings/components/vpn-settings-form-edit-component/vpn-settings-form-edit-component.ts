import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VPNSettingsService } from '../../service/vpn-settings-service';
import { GatewayService } from '../../../gateway/service/gateway-service';
import { VPNSettings } from '../../model/vpn-settings.model';
import { Gateway } from '../../../gateway/model/gateway.model';

@Component({
  selector: 'app-vpn-settings-form-edit-component',
  templateUrl: './vpn-settings-form-edit-component.html',
  standalone: false
})
export class VPNSettingsFormEditComponent implements OnInit {
  vpnSettingsForm!: FormGroup;
  vpnSettingsId!: string;
  gateways: Gateway[] = [];
  loading = false;

  constructor(
    private fb: FormBuilder,
    private vpnSettingsService: VPNSettingsService,
    private gatewayService: GatewayService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.vpnSettingsId = this.route.snapshot.paramMap.get('id') || '';
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
    if (this.vpnSettingsId) {
      this.loading = true;
      this.vpnSettingsService.getById(this.vpnSettingsId).subscribe({
        next: (vpnSettings: VPNSettings) => {
          this.vpnSettingsForm.patchValue(vpnSettings);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  loadGateways(): void {
    this.gatewayService.getAll().subscribe(gateways => this.gateways = gateways);
  }

  getSelectedGatewayName(): string {
    const selectedId = this.vpnSettingsForm.get('gatewayID')?.value;
    return this.gateways.find(g => g.id === selectedId)?.name ?? '';
  }

  onSubmit(): void {
    if (this.vpnSettingsForm.valid) {
      const updatedVPNSettings = this.vpnSettingsForm.value;
      this.vpnSettingsService.update(this.vpnSettingsId, updatedVPNSettings).subscribe({
        next: () => {
          this.router.navigate(['/vpn-settings']);
        },
        error: (err) => {
          console.error('Error updating vpn settings:', err);
        }
      });
    } else {
      this.vpnSettingsForm.markAllAsTouched();
    }
  }
}
