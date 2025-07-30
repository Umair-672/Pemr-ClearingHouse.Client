import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InsuranceRoutingModule } from './insurance-routing-module';
import { InsuranceFormListComponent } from './components/insurance-form-list-component/insurance-form-list-component';
import { InsuranceFormAddComponent } from './components/insurance-form-add-component/insurance-form-add-component';
import { InsuranceFormEditComponent } from './components/insurance-form-edit-component/insurance-form-edit-component';
import { Insurance } from './insurance';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';

@NgModule({
  declarations: [
    Insurance,
    InsuranceFormListComponent,
    InsuranceFormAddComponent,
    InsuranceFormEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InsuranceRoutingModule,
    ConfirmDeleteDialogComponent
  ]
})
export class InsuranceModule{ }
