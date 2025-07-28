import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceCarrier } from './insurance-carrier';

const routes: Routes = [
  {path: '', component: InsuranceCarrier},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsuranceCarrierRoutingModule { }
