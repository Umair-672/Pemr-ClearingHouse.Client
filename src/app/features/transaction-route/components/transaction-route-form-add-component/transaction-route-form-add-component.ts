import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionRouteService } from '../../service/transaction-route-service';
import { InsuranceCarrierService } from '../../../insurance-carrier/service/insurance-carrier-service';
import { X12TransactionService } from '../../../x12-transaction/service/x12-transaction-service';
import { GatewayService } from '../../../gateway/service/gateway-service';
import { Router } from '@angular/router';
import { TransactionRoute } from '../../model/transaction-route.model';
import { InsuranceCarrier } from '../../../insurance-carrier/model/insurance-carrier.model';
import { X12Transaction } from '../../../x12-transaction/model/x12-transaction.model';
import { Gateway } from '../../../gateway/model/gateway.model';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';

@Component({
  selector: 'app-transaction-route-form-add-component',
  templateUrl: './transaction-route-form-add-component.html',
  standalone: false
})
export class TransactionRouteFormAddComponent implements OnInit {
  transactionRouteForm!: FormGroup;
  insuranceCarriers: InsuranceCarrier[] = [];
  x12Transactions: X12Transaction[] = [];
  gateways: Gateway[] = [];

  insuranceCarrierDropdownConfig: DropdownConfig = {
    displayProperty: 'displayName',
    valueProperty: 'id',
    placeholder: 'Select insurance carrier...',
    searchPlaceholder: 'Search and select insurance carrier...',
    noResultsText: 'No insurance carriers found',
    icon: 'bi-truck',
    maxHeight: '200px',
  };

  x12TransactionDropdownConfig: DropdownConfig = {
    displayProperty: 'transaction',
    valueProperty: 'id',
    placeholder: 'Select X12 transaction...',
    searchPlaceholder: 'Search and select X12 transaction...',
    noResultsText: 'No X12 transactions found',
    icon: 'bi-arrows',
    maxHeight: '200px',
  };

  gatewayDropdownConfig: DropdownConfig = {
    displayProperty: 'name',
    valueProperty: 'id',
    placeholder: 'Select gateway...',
    searchPlaceholder: 'Search and select gateway...',
    noResultsText: 'No gateways found',
    icon: 'bi-router',
    maxHeight: '200px',
  };

  constructor(
    private fb: FormBuilder,
    private transactionRouteService: TransactionRouteService,
    private insuranceCarrierService: InsuranceCarrierService,
    private x12TransactionService: X12TransactionService,
    private gatewayService: GatewayService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.transactionRouteForm = this.fb.group({
      insuranceCarrierID: ['', Validators.required],
      x12TransactionID: ['', Validators.required],
      gatewayID: ['', Validators.required],
      authInfo: ['', Validators.required],
      securityInfo: ['', Validators.required],
      submitterQualifier: ['', Validators.required],
      submitterID: ['', Validators.required],
      receiverQualifier: ['', Validators.required],
      receiverID: ['', Validators.required],
      senderCode: ['', Validators.required],
      receiverCode: ['', Validators.required],
      receiverName: ['', Validators.required],
      receiverPrimaryIdentifier: ['', Validators.required],
      outboundPayerID: ['', Validators.required],
      inboundPayerID: ['', Validators.required],
      connectionMode: ['', Validators.required],
      isPreferred: [false]
    });
    this.loadInsuranceCarriers();
    this.loadX12Transactions();
    this.loadGateways();
  }

  loadInsuranceCarriers(): void {
    this.insuranceCarrierService.getAll().subscribe(insuranceCarriers => this.insuranceCarriers = insuranceCarriers);
  }

  loadX12Transactions(): void {
    this.x12TransactionService.getAll().subscribe(x12Transactions => this.x12Transactions = x12Transactions);
  }

  loadGateways(): void {
    this.gatewayService.getAll().subscribe(gateways => this.gateways = gateways);
  }

  onInsuranceCarrierSelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedInsuranceCarrier = selectedOption as InsuranceCarrier;
      this.transactionRouteForm.get('insuranceCarrierID')?.setValue(selectedInsuranceCarrier.id);
    } else {
      this.transactionRouteForm.get('insuranceCarrierID')?.setValue('');
    }
  }

  onX12TransactionSelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedX12Transaction = selectedOption as X12Transaction;
      this.transactionRouteForm.get('x12TransactionID')?.setValue(selectedX12Transaction.id);
    } else {
      this.transactionRouteForm.get('x12TransactionID')?.setValue('');
    }
  }

  onGatewaySelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedGateway = selectedOption as Gateway;
      this.transactionRouteForm.get('gatewayID')?.setValue(selectedGateway.id);
    } else {
      this.transactionRouteForm.get('gatewayID')?.setValue('');
    }
  }

  onSubmit(): void {
    if (this.transactionRouteForm.valid) {
      const transactionRoute: TransactionRoute = this.transactionRouteForm.value;
      this.transactionRouteService.create(transactionRoute).subscribe({
        next: () => {
          this.transactionRouteForm.reset();
          this.router.navigate(['/transactionRoute']);
        },
        error: (err) => {
          console.error('Error adding transaction route:', err);
        }
      });
    } else {
      this.transactionRouteForm.markAllAsTouched();
    }
  }
}
