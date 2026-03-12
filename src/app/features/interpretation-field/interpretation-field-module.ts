import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InterpretationFieldRoutingModule } from './interpretation-field-routing-module';
import { InterpretationField } from './interpretation-field';
import { InterpretationFieldFormListComponent } from './components/interpretation-field-form-list-component/interpretation-field-form-list-component';
import { InterpretationFieldFormAddComponent } from './components/interpretation-field-form-add-component/interpretation-field-form-add-component';
import { InterpretationFieldFormEditComponent } from './components/interpretation-field-form-edit-component/interpretation-field-form-edit-component';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { SearchableDropdownComponent } from '../../shared/components/searchable-dropdown/searchable-dropdown.component';

@NgModule({
  declarations: [
    InterpretationField,
    InterpretationFieldFormListComponent,
    InterpretationFieldFormAddComponent,
    InterpretationFieldFormEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InterpretationFieldRoutingModule,
    ConfirmDeleteDialogComponent,
    SearchableDropdownComponent
  ]
})
export class InterpretationFieldModule { }
