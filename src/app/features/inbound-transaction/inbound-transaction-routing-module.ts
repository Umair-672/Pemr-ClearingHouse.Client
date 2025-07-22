import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboundTransaction } from './inbound-transaction';

const routes: Routes = [
  {path: '', component: InboundTransaction}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboundTransactionRoutingModule { }
