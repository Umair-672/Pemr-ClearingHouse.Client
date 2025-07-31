import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionRouteService } from '../../service/transaction-route-service';
import { InsuranceCarrierService } from '../../../insurance-carrier/service/insurance-carrier-service';
import { X12TransactionService } from '../../../x12-transaction/service/x12-transaction-service';
import { GatewayService } from '../../../gateway/service/gateway-service';
import { TransactionRoute } from '../../model/transaction-route.model';
import { InsuranceCarrier } from '../../../insurance-carrier/model/insurance-carrier.model';
import { X12Transaction } from '../../../x12-transaction/model/x12-transaction.model';
import { Gateway } from '../../../gateway/model/gateway.model';

@Component({
  selector: 'app-transaction-route-form-edit-component',
  templateUrl: './transaction-route-form-edit-component.html',
  standalone: false
})
export class TransactionRouteFormEditComponent implements OnInit {
  transactionRouteForm!: FormGroup;
  transactionRouteId!: string;
  insuranceCarriers: InsuranceCarrier[] = [];
  x12Transactions: X12Transaction[] = [];
  gateways: Gateway[] = [];
  loading = false;

  constructor(
    private fb: FormBuilder,
    private transactionRouteService: TransactionRouteService,
    private insuranceCarrierService: InsuranceCarrierService,
    private x12TransactionService: X12TransactionService,
    private gatewayService: GatewayService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.transactionRouteId = this.route.snapshot.paramMap.get('id') || '';
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
    if (this.transactionRouteId) {
      this.loading = true;
      this.transactionRouteService.getById(this.transactionRouteId).subscribe({
        next: (transactionRoute: TransactionRoute) => {
          this.transactionRouteForm.patchValue(transactionRoute);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
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

  getSelectedInsuranceCarrierName(): string {
    const selectedId = this.transactionRouteForm.get('insuranceCarrierID')?.value;
    return this.insuranceCarriers.find(i => i.id === selectedId)?.displayName ?? '';
  }

  getSelectedX12TransactionName(): string {
    const selectedId = this.transactionRouteForm.get('x12TransactionID')?.value;
    return this.x12Transactions.find(x => x.id === selectedId)?.transaction ?? '';
  }

  getSelectedGatewayName(): string {
    const selectedId = this.transactionRouteForm.get('gatewayID')?.value;
    return this.gateways.find(g => g.id === selectedId)?.name ?? '';
  }

  onSubmit(): void {
    if (this.transactionRouteForm.valid) {
      const updatedTransactionRoute = this.transactionRouteForm.value;
      this.transactionRouteService.update(this.transactionRouteId, updatedTransactionRoute).subscribe({
        next: () => {
          this.router.navigate(['/transaction-route']);
        },
        error: (err) => {
          console.error('Error updating transaction route:', err);
        }
      });
    } else {
      this.transactionRouteForm.markAllAsTouched();
    }
  }
} 