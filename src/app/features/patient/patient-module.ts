import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientRoutingModule } from './patient-routing-module';
import { Patient } from './patient';
import { PatientFormListComponent } from './components/patient-form-list-component/patient-form-list-component';
import { PatientFormAddComponent } from './components/patient-form-add-component/patient-form-add-component';
import { PatientFormEditComponent } from './components/patient-form-edit-component/patient-form-edit-component';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { SearchableDropdownComponent } from '../../shared/components/searchable-dropdown/searchable-dropdown.component';

@NgModule({
  declarations: [
    Patient,
    PatientFormListComponent,
    PatientFormAddComponent,
    PatientFormEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PatientRoutingModule,
    ConfirmDeleteDialogComponent,
    SearchableDropdownComponent
  ]
})
export class PatientModule { }
