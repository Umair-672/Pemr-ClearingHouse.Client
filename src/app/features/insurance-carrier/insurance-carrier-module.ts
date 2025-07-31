import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InsuranceCarrierRoutingModule } from './insurance-carrier-routing-module';
import { InsuranceCarrier } from './insurance-carrier';
import { InsuranceCarrierFormListComponent } from './components/insurance-carrier-form-list-component/insurance-carrier-form-list-component';
import { InsuranceCarrierFormAddComponent } from './components/insurance-carrier-form-add-component/insurance-carrier-form-add-component';
import { InsuranceCarrierFormEditComponent } from './components/insurance-carrier-form-edit-component/insurance-carrier-form-edit-component';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { SearchableDropdownComponent } from '../../shared/components/searchable-dropdown/searchable-dropdown.component';

@NgModule({
  declarations: [
    InsuranceCarrier,
    InsuranceCarrierFormListComponent,
    InsuranceCarrierFormAddComponent,
    InsuranceCarrierFormEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InsuranceCarrierRoutingModule,
    ConfirmDeleteDialogComponent,
    SearchableDropdownComponent
  ]
})
export class InsuranceCarrierModule { }
