import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ResponseKeywordRoutingModule } from './response-keyword-routing-module';
import { ResponseKeywordFormListComponent } from './components/response-keyword-form-list-component/response-keyword-form-list-component';
import { ResponseKeywordFormAddComponent } from './components/response-keyword-form-add-component/response-keyword-form-add-component';
import { ResponseKeywordFormEditComponent } from './components/response-keyword-form-edit-component/response-keyword-form-edit-component';
import { ResponseKeyword } from './response-keyword';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';

@NgModule({
  declarations: [
    ResponseKeyword,
    ResponseKeywordFormListComponent,
    ResponseKeywordFormAddComponent,
    ResponseKeywordFormEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ResponseKeywordRoutingModule,
    ConfirmDeleteDialogComponent
  ]
})
export class ResponseKeywordModule{ }
