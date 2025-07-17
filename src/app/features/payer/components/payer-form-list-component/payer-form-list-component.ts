import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PayerService } from '../../services/payer-service';
import { Payer } from '../../model/payer.model';
import { Subscriber } from '../../model/subscriber.model';

@Component({
  selector: 'app-payer-form-list-component',
  templateUrl: './payer-form-list-component.html',
  standalone: false,
  styleUrls: ['./payer-form-list-component.scss']
})
export class PayerFormListComponent implements OnInit {
  payers: Payer[] = [];
  payerForm: FormGroup;
  subscribers: Subscriber[] = [];
  selectedPayer: Payer | null = null;

  showAddModal = false;
  showEditModal = false;
  showDeleteModal = false;

  constructor(
    private payerService: PayerService,
    private fb: FormBuilder
  ) {
    this.payerForm = this.fb.group({
      name: ['', Validators.required],
      identificationCode: ['', Validators.required],
      subscriberID: ['', Validators.required],
      address1: [''],
      address2: [''],
      city: [''],
      state: [''],
      zipCode: ['']
    });
  }

  ngOnInit(): void {
    this.loadPayers();
    this.getSubscribers();
  }

  loadPayers(): void {
    this.payerService.getAll().subscribe(payers => this.payers = payers);
  }

  getSubscribers(): void {
    // Mocked data for now
    this.subscribers = [
      { id: '1', name: 'Subscriber One' },
      { id: '2', name: 'Subscriber Two' }
    ];
  }

  openAddModal() {
    this.payerForm.reset();
    this.payerForm.markAsPristine();
    this.showAddModal = true;
  }
  closeAddModal() {
    this.showAddModal = false;
  }
  onAddSubmit() {
    if (this.payerForm.valid) {
      this.payerService.create(this.payerForm.value).subscribe(() => {
        this.loadPayers();
        this.closeAddModal();
      });
    }
  }

  openEditModal(payer: Payer) {
    this.selectedPayer = payer;
    this.payerForm.patchValue({ ...payer });
    this.showEditModal = true;
  }
  closeEditModal() {
    this.showEditModal = false;
  }
  onEditSubmit() {
    if (this.payerForm.valid && this.selectedPayer) {
      const updated: Payer = { ...this.selectedPayer, ...this.payerForm.value };
      this.payerService.update(updated.id!, updated).subscribe(() => {
        this.loadPayers();
        this.closeEditModal();
      });
    }
  }

  openDeleteModal(payer: Payer) {
    this.selectedPayer = payer;
    this.showDeleteModal = true;
  }
  closeDeleteModal() {
    this.showDeleteModal = false;
  }
  onDeleteConfirm() {
    if (this.selectedPayer) {
      this.payerService.delete(this.selectedPayer.id!).subscribe(() => {
        this.loadPayers();
        this.closeDeleteModal();
      });
    }
  }
}
