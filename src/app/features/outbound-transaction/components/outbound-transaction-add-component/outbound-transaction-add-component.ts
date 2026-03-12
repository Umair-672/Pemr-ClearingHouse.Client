import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OutboundTransactionService } from '../../service/outbound-transaction-service';
import { OutboundTransaction } from '../../model/outbound-transaction.model';
import { OutboundClaimFile } from '../../../outbound-claim-file/model/outbound-claim-file.model';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';
import { OutboundClaimFileService } from '../../../outbound-claim-file/service/outbound-claim-file-service';

@Component({
  selector: 'app-outbound-transaction-add-component',
  templateUrl: './outbound-transaction-add-component.html',
  standalone: false
})
export class OutboundTransactionAddComponent implements OnInit {
  private fb = inject(FormBuilder);
  private service = inject(OutboundTransactionService);
  private outboundClaimFileService = inject(OutboundClaimFileService);
  private router = inject(Router);

  form!: FormGroup;
  outboundClaimFiles: OutboundClaimFile[] = [];

  outboundClaimFileDropdownConfig: DropdownConfig = {
    displayProperty: 'name',
    valueProperty: 'id',
    placeholder: 'Select outbound claim file...',
    searchPlaceholder: 'Search and select outbound claim file...',
    noResultsText: 'No outbound claim files found',
    icon: 'bi-file-earmark-text',
    maxHeight: '200px',
  };

  ngOnInit(): void {
    this.form = this.fb.group({
      outboundClaimFileID: ['', Validators.required],
      ctrlNo: ['', Validators.required],
      versionName: ['', Validators.required],
      submitterEntityType: ['', Validators.required],
      submitterFirstName: ['', Validators.required],
      submitterLastName: ['', Validators.required],
      submitterIdentification: ['', Validators.required]
    });
    this.loadOutboundClaimFiles();
  }

  loadOutboundClaimFiles(): void {
    this.outboundClaimFileService.getAll().subscribe({
      next: (files: OutboundClaimFile[]) => {
        this.outboundClaimFiles = files;
      },
      error: (err: any) => {
        // Handle error (show message, etc.)
      }
    });
  }

  onOutboundClaimFileSelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedFile = selectedOption as OutboundClaimFile;
      this.form.get('outboundClaimFileID')?.setValue(selectedFile.id);
    } else {
      this.form.get('outboundClaimFileID')?.setValue(null);
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const item: OutboundTransaction = this.form.value;
      this.service.create(item).subscribe({
        next: () => {
          this.form.reset();
          this.router.navigate(['/outboundTransaction']);
        },
        error: (err) => {
          console.error('Error adding outbound transaction:', err);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
