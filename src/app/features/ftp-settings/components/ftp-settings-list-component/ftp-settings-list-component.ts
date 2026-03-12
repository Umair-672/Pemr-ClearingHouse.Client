import { Component, OnInit, inject } from '@angular/core';
import { FTPSettingsService } from '../../service/ftp-settings-service';
import { FTPSettings } from '../../model/ftp-settings.model';

@Component({
  selector: 'app-ftp-settings-list-component',
  templateUrl: './ftp-settings-list-component.html',
  standalone: false
})
export class FTPSettingsListComponent implements OnInit {
  private service = inject(FTPSettingsService);

  items: FTPSettings[] = [];
  selectedItem: FTPSettings | null = null;
  showDeleteModal = false;

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.service.getAll().subscribe(items => this.items = items);
  }

  openDeleteDialog(item: FTPSettings) {
    this.selectedItem = item;
    this.showDeleteModal = true;
  }

  onDeleteDialogClosed(confirmed: boolean) {
    this.showDeleteModal = false;
    if (confirmed && this.selectedItem) {
      this.service.delete(this.selectedItem.id!).subscribe(() => this.loadItems());
    }
  }
}
