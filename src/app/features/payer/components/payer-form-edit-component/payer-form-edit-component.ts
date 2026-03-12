import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PayerService } from '../../service/payer-service';
import { Payer } from '../../model/payer.model';
import { Subscriber } from '../../../subscriber/model/subscriber.model';

@Component({
  selector: 'app-payer-form-edit-component',
  templateUrl: './payer-form-edit-component.html',
  standalone: false,
  styleUrls: ['./payer-form-edit-component.scss']
})
export class PayerFormEditComponent implements OnInit {
  payerForm!: FormGroup;
  payerId!: string;
  subscribers: Subscriber[] = [];
  loading = false;

  constructor(
    private fb: FormBuilder,
    private payerService: PayerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.payerId = this.route.snapshot.paramMap.get('id') || '';
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
    if (this.payerId) {
      this.loading = true;
      this.payerService.getById(this.payerId).subscribe({
        next: (payer: Payer) => {
          this.payerForm.patchValue(payer);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  getSubscribers(): void {
    // Mocked data for now
  }

  onSubmit(): void {
    if (this.payerForm.valid) {
      const updatedPayer = this.payerForm.value;
      this.payerService.update(this.payerId, updatedPayer).subscribe({
        next: () => {
          this.router.navigate(['/payer']);
        },
        error: (err) => {
          console.error('Error updating payer:', err);
        }
      });
    } else {
      this.payerForm.markAllAsTouched();
    }
  }
}
