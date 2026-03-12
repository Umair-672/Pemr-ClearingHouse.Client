import { Component, OnInit } from '@angular/core';
import { X12TransactionService } from '../../service/x12-transaction-service';
import { X12Transaction } from '../../model/x12-transaction.model';

@Component({
  selector: 'app-x12-transaction-form-list-component',
  templateUrl: './x12-transaction-form-list-component.html',
  standalone: false,
  styleUrls: ['./x12-transaction-form-list-component.scss']
})
export class X12TransactionFormListComponent implements OnInit {
  x12Transactions: X12Transaction[] = [];
  selectedX12Transaction: X12Transaction | null = null;
  showDeleteModal = false;

  constructor(private x12TransactionService: X12TransactionService) {}

  ngOnInit(): void {
    this.loadX12Transactions();
  }

  loadX12Transactions(): void {
    this.x12TransactionService.getAll().subscribe(x12Transactions => this.x12Transactions = x12Transactions);
  }

  openDeleteDialog(x12Transaction: X12Transaction) {
    this.selectedX12Transaction = x12Transaction;
    this.showDeleteModal = true;
  }

  onDeleteDialogClosed(confirmed: boolean) {
    this.showDeleteModal = false;
    if (confirmed && this.selectedX12Transaction) {
      this.x12TransactionService.delete(this.selectedX12Transaction.id!).subscribe(() => this.loadX12Transactions());
    }
  }
} 