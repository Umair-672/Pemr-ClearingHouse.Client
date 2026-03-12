import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClaimService } from '../../service/claim-service';
import { Claim } from '../../model/claim.model';
import { Subscriber } from '../../../subscriber/model/subscriber.model';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';
import { SubscriberService } from '../../../subscriber/service/subscriber-service';

@Component({
  selector: 'app-claim-add-component',
  templateUrl: './claim-add-component.html',
  standalone: false
})
export class ClaimAddComponent implements OnInit {
  form!: FormGroup;
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
    private router: Router
  ) {}

  ngOnInit(): void {
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

  onSubmit(): void {
    if (this.form.valid) {
      const item: Claim = {
        ...this.form.value,
        dateOfService: new Date(this.form.value.dateOfService)
      };
      this.service.create(item).subscribe({
        next: () => {
          this.form.reset();
          this.router.navigate(['/claim']);
        },
        error: (err) => {
          console.error('Error adding claim:', err);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
} 