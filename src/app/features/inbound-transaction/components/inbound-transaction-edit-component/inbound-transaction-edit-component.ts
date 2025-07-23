import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InboundTransaction } from '../../model/inboundTransaction';
import { InboundTransactionService } from '../../service/inboundTransaction-service';
import { InboundClaimFile } from '../../../inbound-claim-file/model/inbound-claim-file-model';
import { InboundClaimFileService } from '../../../inbound-claim-file/service/inbound-claim-file-service';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';

@Component({
  selector: 'app-inbound-transaction-edit-component',
  standalone: false,
  templateUrl: './inbound-transaction-edit-component.html',
  styleUrls: ['./inbound-transaction-edit-component.scss']
})
export class InboundTransactionEditComponent implements OnInit {
  inboundTransactionForm!: FormGroup;
  inboundTransactionId!: string;
  inboundClaimFiles: InboundClaimFile[] = [];
  loading = false;

    // Configuration for the searchable dropdown
  claimFileDropdownConfig: DropdownConfig = {
    displayProperty: 'name',
    valueProperty: 'id',
    placeholder: 'Select inbound claim file...',
    searchPlaceholder: 'Search and select inbound claim file...',
    noResultsText: 'No claim files found',
    icon: 'bi-file-earmark-text',
    maxHeight: '200px'
  };

  constructor(
    private fb: FormBuilder,
    private inboundTransactionService: InboundTransactionService,
    private inboundClaimFileService: InboundClaimFileService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inboundTransactionId = this.route.snapshot.paramMap.get('id') || '';

    this.inboundTransactionForm = this.fb.group({
      inboundClaimFileID: ['', Validators.required],
      ctrlNo: ['', Validators.required],
      versionName: ['', Validators.required],
      submitterEntityType: ['', Validators.required],
      submitterFirstName: ['', Validators.required],
      submitterLastName: ['', Validators.required],
      submitterIdentificationCode: ['', Validators.required],
      submitterContactName: ['', Validators.required],
      submitterPhoneNo: ['', Validators.required],
      submitterFaxNo: [''],
      submitterEmail: ['', [Validators.required, Validators.email]]
    });

    this.loadInboundClaimFiles();
    if (this.inboundTransactionId) {
      this.loadInboundTransaction();
    }
  }

  loadInboundClaimFiles(): void {
    this.inboundClaimFileService.getAll().subscribe(files => this.inboundClaimFiles = files);
  }

  loadInboundTransaction(): void {
    this.loading = true;
    this.inboundTransactionService.getById(this.inboundTransactionId).subscribe({
      next: (transaction: InboundTransaction) => {
        this.inboundTransactionForm.patchValue(transaction);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        console.error('Error loading inbound transaction');
      }
    });
  }

    onClaimFileSelectionChange(selectedOption: DropdownOption | null): void {
    // Optional: Handle selection change events if needed
    if (selectedOption) {
      const selectedFile = selectedOption as InboundClaimFile;
      this.inboundTransactionForm.get('inboundClaimFileID')?.setValue(selectedFile.id);
    }
  }

  onSubmit(): void {
    if (this.inboundTransactionForm.valid) {
      const updatedTransaction: InboundTransaction = this.inboundTransactionForm.value;

      this.inboundTransactionService.update(this.inboundTransactionId, updatedTransaction).subscribe({
        next: () => {
          this.router.navigate(['/inboundtransaction']);
        },
        error: (err) => {
          console.error('Error updating inbound transaction:', err);
        }
      });
    } else {
      this.inboundTransactionForm.markAllAsTouched();
    }
  }
}
