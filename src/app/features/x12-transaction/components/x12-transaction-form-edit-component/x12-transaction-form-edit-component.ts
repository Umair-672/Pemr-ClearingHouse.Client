import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { X12TransactionService } from '../../service/x12-transaction-service';
import { X12StandardService } from '../../../x12-standard/service/x12-standard-service';
import { X12Transaction } from '../../model/x12-transaction.model';
import { X12Standard } from '../../../x12-standard/model/x12-standard.model';

@Component({
  selector: 'app-x12-transaction-form-edit-component',
  templateUrl: './x12-transaction-form-edit-component.html',
  standalone: false
})
export class X12TransactionFormEditComponent implements OnInit {
  x12TransactionForm!: FormGroup;
  x12TransactionId!: string;
  x12Standards: X12Standard[] = [];
  loading = false;

  constructor(
    private fb: FormBuilder,
    private x12TransactionService: X12TransactionService,
    private x12StandardService: X12StandardService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.x12TransactionId = this.route.snapshot.paramMap.get('id') || '';
    this.x12TransactionForm = this.fb.group({
      x12StandardID: ['', Validators.required],
      transaction: ['', Validators.required],
      transactionCode: ['', Validators.required]
    });
    this.loadX12Standards();
    if (this.x12TransactionId) {
      this.loading = true;
      this.x12TransactionService.getById(this.x12TransactionId).subscribe({
        next: (x12Transaction: X12Transaction) => {
          this.x12TransactionForm.patchValue(x12Transaction);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  loadX12Standards(): void {
    this.x12StandardService.getAll().subscribe(x12Standards => this.x12Standards = x12Standards);
  }
  getSelectedStandardName(): string {
  const selectedId = this.x12TransactionForm.get('x12StandardID')?.value;
  return this.x12Standards.find(s => s.id === selectedId)?.name ?? '';
}


  onSubmit(): void {
    if (this.x12TransactionForm.valid) {
      const updatedX12Transaction = this.x12TransactionForm.value;
      this.x12TransactionService.update(this.x12TransactionId, updatedX12Transaction).subscribe({
        next: () => {
          this.router.navigate(['/x12Transaction']);
        },
        error: (err) => {
          console.error('Error updating x12 transaction:', err);
        }
      });
    } else {
      this.x12TransactionForm.markAllAsTouched();
    }
  }
}
