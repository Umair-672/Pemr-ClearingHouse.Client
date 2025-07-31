import { Component, OnInit } from '@angular/core';
import { PaytoAddressService } from '../../service/payto-address-service';
import { PaytoAddress } from '../../model/payto-address.model';

@Component({
  selector: 'app-payto-address-form-list-component',
  templateUrl: './payto-address-form-list-component.html',
  standalone: false,
  styleUrls: ['./payto-address-form-list-component.scss']
})
export class PaytoAddressFormListComponent implements OnInit {
  paytoAddresses: PaytoAddress[] = [];
  selectedPaytoAddress: PaytoAddress | null = null;
  showDeleteModal = false;

  constructor(private paytoAddressService: PaytoAddressService) {}

  ngOnInit(): void {
    this.loadPaytoAddresses();
  }

  loadPaytoAddresses(): void {
    this.paytoAddressService.getAll().subscribe(paytoAddresses => this.paytoAddresses = paytoAddresses);
  }

  openDeleteDialog(paytoAddress: PaytoAddress) {
    this.selectedPaytoAddress = paytoAddress;
    this.showDeleteModal = true;
  }

  onDeleteDialogClosed(confirmed: boolean) {
    this.showDeleteModal = false;
    if (confirmed && this.selectedPaytoAddress) {
      this.paytoAddressService.delete(this.selectedPaytoAddress.id!).subscribe(() => this.loadPaytoAddresses());
    }
  }
} 