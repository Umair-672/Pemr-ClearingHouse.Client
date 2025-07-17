import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayerRoutingModule } from './payer-routing-module';
import { PayerFormListComponent } from './components/payer-form-list-component/payer-form-list-component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PayerFormListComponent
  ],
  imports: [
    CommonModule,
    PayerRoutingModule,
    ReactiveFormsModule
  ]
})
export class PayerModule { }
