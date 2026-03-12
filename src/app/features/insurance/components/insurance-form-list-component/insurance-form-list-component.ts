import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../../service/insurance-service';
import { Insurance } from '../../model/insurance.model';

@Component({
  selector: 'app-insurance-form-list-component',
  templateUrl: './insurance-form-list-component.html',
  standalone: false,
  styleUrls: ['./insurance-form-list-component.scss']
})
export class InsuranceFormListComponent implements OnInit {
  insurances: Insurance[] = [];
  selectedInsurance: Insurance | null = null;
  showDeleteModal = false;

  constructor(private insuranceService: InsuranceService) {}

  ngOnInit(): void {
    this.loadInsurances();
  }

  loadInsurances(): void {
    this.insuranceService.getAll().subscribe(insurances => this.insurances = insurances);
  }

  openDeleteDialog(insurance: Insurance) {
    this.selectedInsurance = insurance;
    this.showDeleteModal = true;
  }

  onDeleteDialogClosed(confirmed: boolean) {
    this.showDeleteModal = false;
    if (confirmed && this.selectedInsurance) {
      this.insuranceService.delete(this.selectedInsurance.id!).subscribe(() => this.loadInsurances());
    }
  }
} 