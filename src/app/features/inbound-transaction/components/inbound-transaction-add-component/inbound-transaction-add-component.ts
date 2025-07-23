import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InboundTransaction } from '../../model/inboundTransaction';
import { InboundTransactionService } from '../../service/inboundTransaction-service';
import { InboundClaimFile } from '../../../inbound-claim-file/model/inbound-claim-file-model';
import { InboundClaimFileService } from '../../../inbound-claim-file/service/inbound-claim-file-service';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';

@Component({
  selector: 'app-inbound-transaction-add-component',
  standalone: false,
  templateUrl: './inbound-transaction-add-component.html',
  styleUrl: './inbound-transaction-add-component.scss'
})
export class InboundTransactionAddComponent implements OnInit {
  inboundTransactionForm!: FormGroup;
  inboundClaimFiles: InboundClaimFile[] = [];

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
    private router: Router
  ) {}

  ngOnInit(): void {
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
  }

  loadInboundClaimFiles(): void {
    this.inboundClaimFileService.getAll().subscribe(files => {
      this.inboundClaimFiles = files;
    });
  }

  onClaimFileSelectionChange(selectedOption: DropdownOption | null): void {
    // Optional: Handle selection change events if needed
    if (selectedOption) {
      const selectedFile = selectedOption as InboundClaimFile;
      this.inboundTransactionForm.get('inboundClaimFileID')?.setValue(selectedFile.id);
    } else {
      this.inboundTransactionForm.get('inboundClaimFileID')?.setValue(null);
    }
  }

  onSubmit(): void {
    if (this.inboundTransactionForm.valid) {
      const inboundTransaction: InboundTransaction = this.inboundTransactionForm.value;

      this.inboundTransactionService.create(inboundTransaction).subscribe({
        next: () => {
          this.inboundTransactionForm.reset();
          this.router.navigate(['/inboundtransaction']);
        },
        error: (err) => {
          console.error('Error adding inbound transaction:', err);
        }
      });
    } else {
      this.inboundTransactionForm.markAllAsTouched();
    }
  }
}
