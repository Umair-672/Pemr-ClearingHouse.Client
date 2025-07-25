import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriberService } from '../../service/subscriber-service';
import { Subscriber } from '../../model/subscriber.model';

@Component({
  selector: 'app-subscriber-form-edit-component',
  templateUrl: './subscriber-form-edit-component.html',
  standalone: false
})
export class SubscriberFormEditComponent implements OnInit {
  subscriberForm!: FormGroup;
  subscriberId!: string;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private subscriberService: SubscriberService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscriberId = this.route.snapshot.paramMap.get('id') || '';
    this.subscriberForm = this.fb.group({
      billingProviderID: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: [''],
      primaryIdentification: ['', Validators.required],
      address1: [''],
      address2: [''],
      city: [''],
      state: [''],
      zipCode: [''],
      secondaryIdentification: [''],
      payerResponsibility: [''],
      relationshipCode: [''],
      insuranceTypeCode: [''],
      claimFilingIndicator: [''],
      gender: [''],
      dob: ['', Validators.required]
    });
    if (this.subscriberId) {
      this.loading = true;
      this.subscriberService.getById(this.subscriberId).subscribe({
        next: (subscriber: Subscriber) => {
          this.subscriberForm.patchValue(subscriber);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  onSubmit(): void {
    if (this.subscriberForm.valid) {
      const updatedSubscriber = this.subscriberForm.value;
      this.subscriberService.update(this.subscriberId, updatedSubscriber).subscribe({
        next: () => {
          this.router.navigate(['/subscriber']);
        },
        error: (err) => {
          console.error('Error updating subscriber:', err);
        }
      });
    } else {
      this.subscriberForm.markAllAsTouched();
    }
  }
}
