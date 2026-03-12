import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InterpretedResponseRoutingModule } from './interpreted-response-routing-module';
import { InterpretedResponse } from './interpreted-response';
import { InterpretedResponseFormListComponent } from './components/interpreted-response-form-list-component/interpreted-response-form-list-component';
import { InterpretedResponseFormAddComponent } from './components/interpreted-response-form-add-component/interpreted-response-form-add-component';
import { InterpretedResponseFormEditComponent } from './components/interpreted-response-form-edit-component/interpreted-response-form-edit-component';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { SearchableDropdownComponent } from '../../shared/components/searchable-dropdown/searchable-dropdown.component';

@NgModule({
  declarations: [
    InterpretedResponse,
    InterpretedResponseFormListComponent,
    InterpretedResponseFormAddComponent,
    InterpretedResponseFormEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InterpretedResponseRoutingModule,
    ConfirmDeleteDialogComponent,
    SearchableDropdownComponent
  ]
})
export class InterpretedResponseModule { }
