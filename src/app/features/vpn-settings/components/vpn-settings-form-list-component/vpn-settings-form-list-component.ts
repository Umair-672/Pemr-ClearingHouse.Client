import { Component, OnInit } from '@angular/core';
import { VPNSettingsService } from '../../service/vpn-settings-service';
import { VPNSettings } from '../../model/vpn-settings.model';

@Component({
  selector: 'app-vpn-settings-form-list-component',
  templateUrl: './vpn-settings-form-list-component.html',
  standalone: false,
  styleUrls: ['./vpn-settings-form-list-component.scss']
})
export class VPNSettingsFormListComponent implements OnInit {
  vpnSettings: VPNSettings[] = [];
  selectedVPNSettings: VPNSettings | null = null;
  showDeleteModal = false;

  constructor(private vpnSettingsService: VPNSettingsService) {}

  ngOnInit(): void {
    this.loadVPNSettings();
  }

  loadVPNSettings(): void {
    this.vpnSettingsService.getAll().subscribe(vpnSettings => this.vpnSettings = vpnSettings);
  }

  openDeleteDialog(vpnSettings: VPNSettings) {
    this.selectedVPNSettings = vpnSettings;
    this.showDeleteModal = true;
  }

  onDeleteDialogClosed(confirmed: boolean) {
    this.showDeleteModal = false;
    if (confirmed && this.selectedVPNSettings) {
      this.vpnSettingsService.delete(this.selectedVPNSettings.id!).subscribe(() => this.loadVPNSettings());
    }
  }
} 