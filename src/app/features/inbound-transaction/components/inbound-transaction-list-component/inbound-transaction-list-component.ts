import { Component, OnInit } from '@angular/core';
import { InboundTransaction } from '../../model/inboundTransaction';
import { InboundTransactionService } from '../../service/inboundTransaction-service';

@Component({
  selector: 'app-inbound-transaction-list-component',
  standalone: false,
  templateUrl: './inbound-transaction-list-component.html',
  styleUrls: ['./inbound-transaction-list-component.scss']
})
export class InboundTransactionListComponent implements OnInit {
  inboundTransactions: InboundTransaction[] = [];
  selectedTransaction: InboundTransaction | null = null;
  showDeleteModal = false;

  constructor(private inboundTransactionService: InboundTransactionService) {}

  ngOnInit(): void {
    this.loadInboundTransactions();
  }

  loadInboundTransactions(): void {
    this.inboundTransactionService.getAll().subscribe(transactions => this.inboundTransactions = transactions);
  }

  openDeleteDialog(transaction: InboundTransaction) {
    this.selectedTransaction = transaction;
    this.showDeleteModal = true;
  }

  onDeleteDialogClosed(confirmed: boolean) {
    this.showDeleteModal = false;
    if (confirmed && this.selectedTransaction) {
      this.inboundTransactionService.delete(this.selectedTransaction.id!).subscribe(() => this.loadInboundTransactions());
    }
  }
}
