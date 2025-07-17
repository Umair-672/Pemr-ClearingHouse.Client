import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PayerService } from '../../service/payer-service';
import { Payer } from '../../model/payer.model';
import { Subscriber } from '../../model/subscriber.model';

@Component({
  selector: 'app-payer-form-edit-component',
  templateUrl: './payer-form-edit-component.html',
  standalone: false,
  styleUrls: ['./payer-form-edit-component.scss']
})
export class PayerFormEditComponent{}
