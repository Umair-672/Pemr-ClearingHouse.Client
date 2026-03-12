import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { X12TransactionService } from '../../service/x12-transaction-service';
import { X12StandardService } from '../../../x12-standard/service/x12-standard-service';
import { Router } from '@angular/router';
import { X12Transaction } from '../../model/x12-transaction.model';
import { X12Standard } from '../../../x12-standard/model/x12-standard.model';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';

@Component({
  selector: 'app-x12-transaction-form-add-component',
  templateUrl: './x12-transaction-form-add-component.html',
  standalone: false
})
export class X12TransactionFormAddComponent implements OnInit {
  x12TransactionForm!: FormGroup;
  x12Standards: X12Standard[] = [];

  x12TransactionDropdownConfig: DropdownConfig = {
    displayProperty: 'name',
    valueProperty: 'id',
    placeholder: 'Select x12 transaction...',
    searchPlaceholder: 'Search and select x12 transaction...',
    noResultsText: 'No x12 transactions found',
    icon: 'bi-file-earmark-text',
    maxHeight: '200px',
  };

  constructor(
    private fb: FormBuilder,
    private x12TransactionService: X12TransactionService,
    private x12StandardService: X12StandardService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.x12TransactionForm = this.fb.group({
      x12StandardID: ['', Validators.required],
      transaction: ['', Validators.required],
      transactionCode: ['', Validators.required]
    });
    this.loadX12Standards();
  }

  loadX12Standards(): void {
    this.x12StandardService.getAll().subscribe(x12Standards => this.x12Standards = x12Standards);
  }

  onX12StandardSelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedX12Standard = selectedOption as X12Standard;
        this.x12TransactionForm.get('x12StandardID')?.setValue(selectedX12Standard.id);
      } else {
        this.x12TransactionForm.get('x12StandardID')?.setValue('');
      }
    }

  onSubmit(): void {
    if (this.x12TransactionForm.valid) {
      const x12Transaction: X12Transaction = this.x12TransactionForm.value;
      this.x12TransactionService.create(x12Transaction).subscribe({
        next: () => {
          this.x12TransactionForm.reset();
          this.router.navigate(['/x12Transaction']);
        },
        error: (err) => {
          console.error('Error adding x12 transaction:', err);
        }
      });
    } else {
      this.x12TransactionForm.markAllAsTouched();
    }
  }
}
