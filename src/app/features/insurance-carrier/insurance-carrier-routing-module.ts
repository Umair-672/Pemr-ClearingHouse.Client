import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceCarrier } from './insurance-carrier';
import { InsuranceCarrierFormAddComponent } from './components/insurance-carrier-form-add-component/insurance-carrier-form-add-component';
import { InsuranceCarrierFormEditComponent } from './components/insurance-carrier-form-edit-component/insurance-carrier-form-edit-component';

const routes: Routes = [
  { path: '', component: InsuranceCarrier },
  { path: 'add', component: InsuranceCarrierFormAddComponent },
  { path: 'edit/:id', component: InsuranceCarrierFormEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsuranceCarrierRoutingModule { }
