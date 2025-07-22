import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingProvider } from './billing-provider';

const routes: Routes = [
  {path: '', component: BillingProvider}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingProviderRoutingModule { }
