import { Component, OnInit } from '@angular/core';
import { BillingPrvSecondaryIdentification } from '../../model/billing-pro-sec-identification.model';
import { BillingPrvSecondaryIdentificationService } from '../../service/billing-pro-sec-identification-service';


@Component({
  selector: 'app-billing-pro-sec-identification-list-component',
  templateUrl: './billing-pro-sec-identification-list-component.html',
  styleUrls: ['./billing-pro-sec-identification-list-component.scss'],
  standalone: false
})
export class BillingProSecIdentificationListComponent implements OnInit {
  items: BillingPrvSecondaryIdentification[] = [];
  selectedItem:  BillingPrvSecondaryIdentification| null = null;
  showDeleteModal = false;

  constructor(private service: BillingPrvSecondaryIdentificationService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.service.getAll().subscribe(items => this.items = items);
  }

  openDeleteDialog(item: BillingPrvSecondaryIdentification): void {
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
