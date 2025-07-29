import { Component, OnInit, inject } from '@angular/core';
import { OutboundClaimFileService } from '../../service/outbound-claim-file-service';
import { OutboundClaimFile } from '../../model/outbound-claim-file.model';

@Component({
  selector: 'app-outbound-claim-file-list-component',
  templateUrl: './outbound-claim-file-list-component.html',
  standalone: false
})
export class OutboundClaimFileListComponent implements OnInit {
  private service = inject(OutboundClaimFileService);

  items: OutboundClaimFile[] = [];
  selectedItem: OutboundClaimFile | null = null;
  showDeleteModal = false;

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.service.getAll().subscribe(items => this.items = items);
  }

  openDeleteDialog(item: OutboundClaimFile) {
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
