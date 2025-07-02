import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayerRoutingModule } from './payer-routing-module';
import { Payer } from './payer';


@NgModule({
  declarations: [
    Payer
  ],
  imports: [
    CommonModule,
    PayerRoutingModule
  ]
})
export class PayerModule { }
