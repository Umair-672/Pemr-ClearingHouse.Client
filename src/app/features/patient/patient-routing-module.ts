import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Patient } from './patient';
import { PatientFormAddComponent } from './components/patient-form-add-component/patient-form-add-component';
import { PatientFormEditComponent } from './components/patient-form-edit-component/patient-form-edit-component';

const routes: Routes = [
  { path: '', component: Patient },
  { path: 'add', component: PatientFormAddComponent },
  { path: 'edit/:id', component: PatientFormEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
