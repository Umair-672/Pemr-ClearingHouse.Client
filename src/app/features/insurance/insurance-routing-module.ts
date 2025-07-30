import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceFormListComponent } from './components/insurance-form-list-component/insurance-form-list-component';
import { InsuranceFormAddComponent } from './components/insurance-form-add-component/insurance-form-add-component';
import { InsuranceFormEditComponent } from './components/insurance-form-edit-component/insurance-form-edit-component';
import { Insurance } from './insurance';

const routes: Routes = [
  { path: '', component: Insurance},
  { path: 'add', component: InsuranceFormAddComponent },
  { path: 'edit/:id', component: InsuranceFormEditComponent },
  {path: 'list', component: InsuranceFormListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsuranceRoutingModule { }
