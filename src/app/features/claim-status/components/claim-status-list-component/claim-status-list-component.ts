import { Component, OnInit, inject } from '@angular/core';
import { ClaimStatusService } from '../../service/claim-status-service';
import { ClaimStatus } from '../../model/claim-status.model';

@Component({
  selector: 'app-claim-status-list-component',
  templateUrl: './claim-status-list-component.html',
  standalone: false
})
export class ClaimStatusListComponent implements OnInit {
  private service = inject(ClaimStatusService);

  items: ClaimStatus[] = [];
  selectedItem: ClaimStatus | null = null;
  showDeleteModal = false;

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.service.getAll().subscribe(items => this.items = items);
  }

  openDeleteDialog(item: ClaimStatus) {
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
