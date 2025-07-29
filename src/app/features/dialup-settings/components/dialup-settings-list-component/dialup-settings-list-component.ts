import { Component, OnInit, inject } from '@angular/core';
import { DialupSettingsService } from '../../service/dialup-settings-service';
import { DialupSettings } from '../../model/dialup-settings.model';

@Component({
  selector: 'app-dialup-settings-list-component',
  templateUrl: './dialup-settings-list-component.html',
  standalone: false
})
export class DialupSettingsListComponent implements OnInit {
  private service = inject(DialupSettingsService);

  items: DialupSettings[] = [];
  selectedItem: DialupSettings | null = null;
  showDeleteModal = false;

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.service.getAll().subscribe(items => this.items = items);
  }

  openDeleteDialog(item: DialupSettings) {
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