import { Component, OnInit } from '@angular/core';
import { RTTransactionSettingsService } from '../../service/rt-transaction-settings-service';
import { RTTransactionSettings } from '../../model/rt-transaction-settings.model';

@Component({
  selector: 'app-rt-transaction-settings-form-list-component',
  templateUrl: './rt-transaction-settings-form-list-component.html',
  standalone: false,
  styleUrls: ['./rt-transaction-settings-form-list-component.scss']
})
export class RTTransactionSettingsFormListComponent implements OnInit {
  rtTransactionSettings: RTTransactionSettings[] = [];
  selectedRTTransactionSettings: RTTransactionSettings | null = null;
  showDeleteModal = false;

  constructor(private rtTransactionSettingsService: RTTransactionSettingsService) {}

  ngOnInit(): void {
    this.loadRTTransactionSettings();
  }

  loadRTTransactionSettings(): void {
    this.rtTransactionSettingsService.getAll().subscribe(rtTransactionSettings => this.rtTransactionSettings = rtTransactionSettings);
  }

  openDeleteDialog(rtTransactionSettings: RTTransactionSettings) {
    this.selectedRTTransactionSettings = rtTransactionSettings;
    this.showDeleteModal = true;
  }

  onDeleteDialogClosed(confirmed: boolean) {
    this.showDeleteModal = false;
    if (confirmed && this.selectedRTTransactionSettings) {
      this.rtTransactionSettingsService.delete(this.selectedRTTransactionSettings.id!).subscribe(() => this.loadRTTransactionSettings());
    }
  }
} 