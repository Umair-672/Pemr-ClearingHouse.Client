import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClaimService } from '../../service/claim-service';
import { Claim } from '../../model/claim.model';
import { Subscriber } from '../../../subscriber/model/subscriber.model';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';
import { SubscriberService } from '../../../subscriber/service/subscriber-service';

@Component({
  selector: 'app-claim-edit-component',
  templateUrl: './claim-edit-component.html',
  standalone: false
})
export class ClaimEditComponent implements OnInit {
  form!: FormGroup;
  itemId!: string;
  loading = false;
  subscribers: Subscriber[] = [];

  subscriberDropdownConfig: DropdownConfig = {
    displayProperty: 'firstName',
    valueProperty: 'id',
    placeholder: 'Select subscriber...',
    searchPlaceholder: 'Search and select subscriber...',
    noResultsText: 'No subscribers found',
    icon: 'bi-person',
    maxHeight: '200px',
  };

  constructor(
    private fb: FormBuilder,
    private service: ClaimService,
    private subscriberService: SubscriberService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id') || '';
    this.form = this.fb.group({
      subscriberID: ['', Validators.required],
      patientControlNumber: ['', Validators.required],
      chargeAmount: ['', [Validators.required, Validators.min(0)]],
      placeOfService: ['', Validators.required],
      dateOfService: ['', Validators.required],
      referralNo: [''],
      priorAuthorization: [''],
      payerControlNumber: ['']
    });
    this.loadSubscribers();
    if (this.itemId) {
      this.loading = true;
      this.service.getById(this.itemId).subscribe({
        next: (item: Claim) => {
          this.form.patchValue({
            ...item,
            dateOfService: this.formatDateForInput(item.dateOfService)
          });
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  loadSubscribers(): void {
    this.subscriberService.getAll().subscribe({
      next: (subscribers: Subscriber[]) => {
        this.subscribers = subscribers;
      },
      error: err => {
        // Handle error (show message, etc.)
      }
    });
  }

  onSubscriberSelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedSubscriber = selectedOption as Subscriber;
      this.form.get('subscriberID')?.setValue(selectedSubscriber.id);
    } else {
      this.form.get('subscriberID')?.setValue(null);
    }
  }

  formatDateForInput(date: Date): string {
    if (!date) return '';
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  }

  onSubmit(): void {
    if (this.form.valid) {
      const updatedItem = {
        ...this.form.value,
        dateOfService: new Date(this.form.value.dateOfService)
      };
      this.service.update(this.itemId, updatedItem).subscribe({
        next: () => {
          this.router.navigate(['/claim']);
        },
        error: (err) => {
          console.error('Error updating claim:', err);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
} 