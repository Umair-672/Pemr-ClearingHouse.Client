import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingPrvSecIdentification } from './billing-prv-sec-identification';

const routes: Routes = [
  {path: '', component: BillingPrvSecIdentification},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingPrvSecIdentificationRoutingModule { }
