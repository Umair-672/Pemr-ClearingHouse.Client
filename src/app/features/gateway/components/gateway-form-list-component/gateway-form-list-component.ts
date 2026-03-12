import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../../service/gateway-service';
import { Gateway } from '../../model/gateway.model';

@Component({
  selector: 'app-gateway-form-list-component',
  templateUrl: './gateway-form-list-component.html',
  standalone: false,
  styleUrls: ['./gateway-form-list-component.scss']
})
export class GatewayFormListComponent implements OnInit {
  gateways: Gateway[] = [];
  selectedGateway: Gateway | null = null;
  showDeleteModal = false;

  constructor(private gatewayService: GatewayService) {}

  ngOnInit(): void {
    this.loadGateways();
  }

  loadGateways(): void {
    this.gatewayService.getAll().subscribe(gateways => this.gateways = gateways);
  }

  openDeleteDialog(gateway: Gateway) {
    this.selectedGateway = gateway;
    this.showDeleteModal = true;
  }

  onDeleteDialogClosed(confirmed: boolean) {
    this.showDeleteModal = false;
    if (confirmed && this.selectedGateway) {
      this.gatewayService.delete(this.selectedGateway.id!).subscribe(() => this.loadGateways());
    }
  }
}
