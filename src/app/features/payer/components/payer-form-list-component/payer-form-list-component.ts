import { SubscriberService } from './../../../subscriber/service/subscriber-service';
import { Component, OnInit } from '@angular/core';
import { PayerService } from '../../service/payer-service';
import { Payer } from '../../model/payer.model';
import { Subscriber } from '../../../subscriber/model/subscriber.model';

@Component({
  selector: 'app-payer-form-list-component',
  templateUrl: './payer-form-list-component.html',
  standalone: false,
  styleUrls: ['./payer-form-list-component.scss']
})
export class PayerFormListComponent implements OnInit {
  payers: Payer[] = [];
  subscribers: Subscriber[] = [];
  selectedPayer: Payer | null = null;
  showDeleteModal = false;

  constructor(private payerService: PayerService, private subscriberService: SubscriberService ) {}

  ngOnInit(): void {
    this.loadPayers();
    this.getSubscribers();
  }

  loadPayers(): void {
    this.payerService.getAll().subscribe(payers => this.payers = payers);
  }

  getSubscribers(): void {

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
