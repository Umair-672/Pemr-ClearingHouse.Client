import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InterpretedResponseFieldRoutingModule } from './interpreted-response-field-routing-module';
import { InterpretedResponseField } from './interpreted-response-field';
import { InterpretedResponseFieldFormListComponent } from './components/interpreted-response-field-form-list-component/interpreted-response-field-form-list-component';
import { InterpretedResponseFieldFormAddComponent } from './components/interpreted-response-field-form-add-component/interpreted-response-field-form-add-component';
import { InterpretedResponseFieldFormEditComponent } from './components/interpreted-response-field-form-edit-component/interpreted-response-field-form-edit-component';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { SearchableDropdownComponent } from '../../shared/components/searchable-dropdown/searchable-dropdown.component';

@NgModule({
  declarations: [
    InterpretedResponseField,
    InterpretedResponseFieldFormListComponent,
    InterpretedResponseFieldFormAddComponent,
    InterpretedResponseFieldFormEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InterpretedResponseFieldRoutingModule,
    ConfirmDeleteDialogComponent,
    SearchableDropdownComponent
  ]
})
export class InterpretedResponseFieldModule { }
