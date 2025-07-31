import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ResponseKeywordFieldRoutingModule } from './response-keyword-field-routing-module';
import { ResponseKeywordField } from './response-keyword-field';
import { ResponseKeywordFieldFormListComponent } from './components/response-keyword-field-form-list-component/response-keyword-field-form-list-component';
import { ResponseKeywordFieldFormAddComponent } from './components/response-keyword-field-form-add-component/response-keyword-field-form-add-component';
import { ResponseKeywordFieldFormEditComponent } from './components/response-keyword-field-form-edit-component/response-keyword-field-form-edit-component';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { SearchableDropdownComponent } from '../../shared/components/searchable-dropdown/searchable-dropdown.component';

@NgModule({
  declarations: [
    ResponseKeywordField,
    ResponseKeywordFieldFormListComponent,
    ResponseKeywordFieldFormAddComponent,
    ResponseKeywordFieldFormEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ResponseKeywordFieldRoutingModule,
    ConfirmDeleteDialogComponent,
    SearchableDropdownComponent
  ]
})
export class ResponseKeywordFieldModule { }
