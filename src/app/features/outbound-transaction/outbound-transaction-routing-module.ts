import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutboundTransaction } from './outbound-transaction';

const routes: Routes = [
  {path: '', component: OutboundTransaction},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutboundTransactionRoutingModule { }
