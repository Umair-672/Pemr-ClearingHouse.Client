import { Component, OnInit } from '@angular/core';
import { OutboundClaimService } from '../../service/outbound-claim-service';
import { OutboundClaim } from '../../model/outbound-claim.model';

@Component({
  selector: 'app-outbound-claim-list-component',
  templateUrl: './outbound-claim-list-component.html',
  standalone: false
})
export class OutboundClaimListComponent implements OnInit {
  items: OutboundClaim[] = [];
  selectedItem: OutboundClaim | null = null;
  showDeleteModal = false;

  constructor(private service: OutboundClaimService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.service.getAll().subscribe(items => this.items = items);
  }

  openDeleteDialog(item: OutboundClaim) {
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
