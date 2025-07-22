import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PayerService } from '../../service/payer-service';
import { Router } from '@angular/router';
import { Payer } from '../../model/payer.model';
import { Subscriber } from '../../../subscriber/model/subscriber.model';

@Component({
  selector: 'app-payer-form-add-component',
  templateUrl: './payer-form-add-component.html',
  standalone: false,
  styleUrls: ['./payer-form-add-component.scss']
})
export class PayerFormAddComponent implements OnInit {
  payerForm!: FormGroup;
  subscribers: Subscriber[] = [];

  constructor(
    private fb: FormBuilder,
    private payerService: PayerService,
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
    this.getSubscribers();
  }

  getSubscribers(): void {
    // Mocked data for now
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
