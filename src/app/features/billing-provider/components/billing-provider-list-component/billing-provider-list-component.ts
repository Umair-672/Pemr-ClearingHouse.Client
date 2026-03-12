import { Component, OnInit } from '@angular/core';
import { BillingProvider } from '../../model/billingProvider-model';
import { BillingProviderService } from '../../service/billing-provider-service';

@Component({
  selector: 'app-billing-provider-list-component',
  standalone: false,
  templateUrl: './billing-provider-list-component.html',
  styleUrl: './billing-provider-list-component.scss'
})
export class BillingProviderListComponent implements OnInit {
  billingProviders: BillingProvider[] = [];
  selectedProvider: BillingProvider | null = null;
  showDeleteModal = false;

  constructor(private billingProviderService: BillingProviderService) {}

  ngOnInit(): void {
    this.loadBillingProviders();
  }

  loadBillingProviders(): void {
    this.billingProviderService.getAll().subscribe(providers => {
      this.billingProviders = providers;
    });
  }

  openDeleteDialog(provider: BillingProvider): void {
    this.selectedProvider = provider;
    this.showDeleteModal = true;
  }

  onDeleteDialogClosed(confirmed: boolean): void {
    this.showDeleteModal = false;
    if (confirmed && this.selectedProvider) {
      this.billingProviderService.delete(this.selectedProvider.inboundTransactionID).subscribe(() => {
        this.loadBillingProviders();
      });
    }
    this.selectedProvider = null;
  }
}
