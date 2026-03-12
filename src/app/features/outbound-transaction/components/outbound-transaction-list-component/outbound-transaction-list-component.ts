import { Component, OnInit, inject } from '@angular/core';
import { OutboundTransactionService } from '../../service/outbound-transaction-service';
import { OutboundTransaction } from '../../model/outbound-transaction.model';

@Component({
  selector: 'app-outbound-transaction-list-component',
  templateUrl: './outbound-transaction-list-component.html',
  standalone: false
})
export class OutboundTransactionListComponent implements OnInit {
  private service = inject(OutboundTransactionService);

  items: OutboundTransaction[] = [];
  selectedItem: OutboundTransaction | null = null;
  showDeleteModal = false;

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.service.getAll().subscribe(items => this.items = items);
  }

  openDeleteDialog(item: OutboundTransaction) {
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
