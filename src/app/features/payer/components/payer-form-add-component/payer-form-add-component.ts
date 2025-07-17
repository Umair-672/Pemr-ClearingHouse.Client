import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PayerService } from '../../service/payer-service';
import { Subscriber } from '../../model/subscriber.model';
import { Payer } from '../../model/payer.model';

@Component({
  selector: 'app-payer-form-add-component',
  templateUrl: './payer-form-add-component.html',
  standalone: false,
  styleUrls: ['./payer-form-add-component.scss']
})
export class PayerFormAddComponent implements OnInit {
  payerForm: FormGroup;
  subscribers: Subscriber[] = [];

  constructor(
    private fb: FormBuilder,
    private payerService: PayerService,
   // private dialogRef: MatDialogRef<PayerFormAddComponent>
  ) {
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
  }

  ngOnInit(): void {
    this.getSubscribers();
  }

  getSubscribers(): void {
    // Mocked data for now
    this.subscribers = [
      { id: '1', name: 'Subscriber One' },
      { id: '2', name: 'Subscriber Two' }
    ];
  }

  onSubmit(): void {
    if (this.payerForm.valid) {
      const payer: Payer = this.payerForm.value;
      this.payerService.create(payer).subscribe(() => {
     //   this.dialogRef.close(true);
      });
    }
  }
}
