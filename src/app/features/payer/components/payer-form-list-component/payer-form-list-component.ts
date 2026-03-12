import { Component, OnInit } from '@angular/core';
import { PayerService } from '../../service/payer-service';
import { Payer } from '../../model/payer.model';


@Component({
  selector: 'app-payer-form-list-component',
  templateUrl: './payer-form-list-component.html',
  standalone: false,
  styleUrls: ['./payer-form-list-component.scss']
})
export class PayerFormListComponent implements OnInit {
  payers: Payer[] = [];
  selectedPayer: Payer | null = null;
  showDeleteModal = false;

  constructor(private payerService: PayerService) {}

  ngOnInit(): void {
    this.loadPayers();
  }

  loadPayers(): void {
    this.payerService.getAll().subscribe(payers => this.payers = payers);
  }

  openDeleteDialog(payer: Payer) {
    this.selectedPayer = payer;
    this.showDeleteModal = true;
  }

  onDeleteDialogClosed(confirmed: boolean) {
    this.showDeleteModal = false;
    if (confirmed && this.selectedPayer) {
      this.payerService.delete(this.selectedPayer.id!).subscribe(() => this.loadPayers());
    }
  }
}
