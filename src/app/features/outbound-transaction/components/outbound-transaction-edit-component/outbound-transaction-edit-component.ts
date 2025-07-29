import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OutboundTransactionService } from '../../service/outbound-transaction-service';
import { OutboundTransaction } from '../../model/outbound-transaction.model';
import { OutboundClaimFile } from '../../../outbound-claim-file/model/outbound-claim-file.model';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';
import { OutboundClaimFileService } from '../../../outbound-claim-file/service/outbound-claim-file-service';

@Component({
  selector: 'app-outbound-transaction-edit-component',
  templateUrl: './outbound-transaction-edit-component.html',
  standalone: false
})
export class OutboundTransactionEditComponent implements OnInit {
  private fb = inject(FormBuilder);
  private service = inject(OutboundTransactionService);
  private outboundClaimFileService = inject(OutboundClaimFileService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  form!: FormGroup;
  itemId!: string;
  loading = false;
  outboundClaimFiles: OutboundClaimFile[] = [];

  outboundClaimFileDropdownConfig: DropdownConfig = {
    displayProperty: 'id',
    valueProperty: 'id',
    placeholder: 'Select outbound claim file...',
    searchPlaceholder: 'Search and select outbound claim file...',
    noResultsText: 'No outbound claim files found',
    icon: 'bi-file-earmark-text',
    maxHeight: '200px',
  };

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id') || '';
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
    if (this.itemId) {
      this.loading = true;
      this.service.getById(this.itemId).subscribe({
        next: (item: OutboundTransaction) => {
          this.form.patchValue(item);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
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
      const updatedItem = this.form.value;
      this.service.update(this.itemId, updatedItem).subscribe({
        next: () => {
          this.router.navigate(['/outboundTransaction']);
        },
        error: (err) => {
          console.error('Error updating outbound transaction:', err);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
