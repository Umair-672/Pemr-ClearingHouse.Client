import { Component, OnInit } from '@angular/core';
import { TransactionRouteService } from '../../service/transaction-route-service';
import { TransactionRoute } from '../../model/transaction-route.model';

@Component({
  selector: 'app-transaction-route-form-list-component',
  templateUrl: './transaction-route-form-list-component.html',
  standalone: false,
  styleUrls: ['./transaction-route-form-list-component.scss']
})
export class TransactionRouteFormListComponent implements OnInit {
  transactionRoutes: TransactionRoute[] = [];
  selectedTransactionRoute: TransactionRoute | null = null;
  showDeleteModal = false;

  constructor(private transactionRouteService: TransactionRouteService) {}

  ngOnInit(): void {
    this.loadTransactionRoutes();
  }

  loadTransactionRoutes(): void {
    this.transactionRouteService.getAll().subscribe(transactionRoutes => this.transactionRoutes = transactionRoutes);
  }

  openDeleteDialog(transactionRoute: TransactionRoute) {
    this.selectedTransactionRoute = transactionRoute;
    this.showDeleteModal = true;
  }

  onDeleteDialogClosed(confirmed: boolean) {
    this.showDeleteModal = false;
    if (confirmed && this.selectedTransactionRoute) {
      this.transactionRouteService.delete(this.selectedTransactionRoute.id!).subscribe(() => this.loadTransactionRoutes());
    }
  }
} 