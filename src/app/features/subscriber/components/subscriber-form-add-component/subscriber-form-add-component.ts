import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubscriberService } from '../../service/subscriber-service';
import { Subscriber } from '../../model/subscriber.model';

@Component({
  selector: 'app-subscriber-form-add-component',
  templateUrl: './subscriber-form-add-component.html',
  standalone: false
})
export class SubscriberFormAddComponent implements OnInit {
  subscriberForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private subscriberService: SubscriberService,
    private router: Router
  ) {}

  ngOnInit(): void {
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
  }

  onSubmit(): void {
    if (this.subscriberForm.valid) {
      const subscriber: Subscriber = this.subscriberForm.value;
      this.subscriberService.create(subscriber).subscribe({
        next: () => {
          this.subscriberForm.reset();
          this.router.navigate(['/subscriber']);
        },
        error: (err) => {
          console.error('Error adding subscriber:', err);
        }
      });
    } else {
      this.subscriberForm.markAllAsTouched();
    }
  }
} 