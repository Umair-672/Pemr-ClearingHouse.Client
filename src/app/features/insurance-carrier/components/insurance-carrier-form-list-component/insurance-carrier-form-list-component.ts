import { Component, OnInit } from '@angular/core';
import { InsuranceCarrierService } from '../../service/insurance-carrier-service';
import { InsuranceCarrier } from '../../model/insurance-carrier.model';

@Component({
  selector: 'app-insurance-carrier-form-list-component',
  templateUrl: './insurance-carrier-form-list-component.html',
  standalone: false,
  styleUrls: ['./insurance-carrier-form-list-component.scss']
})
export class InsuranceCarrierFormListComponent implements OnInit {
  insuranceCarriers: InsuranceCarrier[] = [];
  selectedInsuranceCarrier: InsuranceCarrier | null = null;
  showDeleteModal = false;

  constructor(private insuranceCarrierService: InsuranceCarrierService) {}

  ngOnInit(): void {
    this.loadInsuranceCarriers();
  }

  loadInsuranceCarriers(): void {
    this.insuranceCarrierService.getAll().subscribe(insuranceCarriers => this.insuranceCarriers = insuranceCarriers);
  }

  openDeleteDialog(insuranceCarrier: InsuranceCarrier) {
    this.selectedInsuranceCarrier = insuranceCarrier;
    this.showDeleteModal = true;
  }

  onDeleteDialogClosed(confirmed: boolean) {
    this.showDeleteModal = false;
    if (confirmed && this.selectedInsuranceCarrier) {
      this.insuranceCarrierService.delete(this.selectedInsuranceCarrier.id!).subscribe(() => this.loadInsuranceCarriers());
    }
  }
} 