import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PayerService } from '../../service/payer-service';
import { Router } from '@angular/router';
import { Payer } from '../../model/payer.model';
import { Subscriber } from '../../../subscriber/model/subscriber.model';
import { SubscriberService } from '../../../subscriber/service/subscriber-service';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';

@Component({
  selector: 'app-payer-form-add-component',
  templateUrl: './payer-form-add-component.html',
  standalone: false,
  styleUrls: ['./payer-form-add-component.scss']
})
export class PayerFormAddComponent implements OnInit {
  payerForm!: FormGroup;
  subscribers: Subscriber[] = [];
  loading = false;

  payerDropdownConfig: DropdownConfig = {
    displayProperty: 'id',
    valueProperty: 'id',
    placeholder: 'Select payer...',
    searchPlaceholder: 'Search and select payer...',
    noResultsText: 'No payers found',
    icon: 'bi-file-earmark-text',
    maxHeight: '200px',
  };


  constructor(
    private fb: FormBuilder,
    private payerService: PayerService,
    private subscriberService: SubscriberService,
    private router: Router
  ) {}

  ngOnInit(): void {
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
    this.loadSubscribers();
  }

 loadSubscribers(): void {
    this.loading = true;
    this.subscriberService.getAll().subscribe({
      next: (subscribers: Subscriber[]) => {
        this.subscribers = subscribers;
        this.loading = false;
      },
      error: err => {
        // Handle error (show message, etc.)
      }
    });
  }

  onSubscriberSelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedSubscriber = selectedOption as Subscriber;
      this.payerForm.get('subscriberID')?.setValue(selectedSubscriber.id);
    } else {
      this.payerForm.get('subscriberID')?.setValue(null);
    }
  }

  onSubmit(): void {
    if (this.payerForm.valid) {
      const payer: Payer = this.payerForm.value;
      this.payerService.create(payer).subscribe({
        next: () => {
          this.payerForm.reset();
          this.router.navigate(['/payer']);
        },
        error: (err) => {
          console.error('Error adding payer:', err);
        }
      });
    } else {
      this.payerForm.markAllAsTouched();
    }
  }
}
