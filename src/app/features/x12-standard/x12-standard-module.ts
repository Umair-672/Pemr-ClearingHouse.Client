import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { X12StandardRoutingModule } from './x12-standard-routing-module';
import { X12StandardFormListComponent } from './components/x12-standard-form-list-component/x12-standard-form-list-component';
import { X12StandardFormAddComponent } from './components/x12-standard-form-add-component/x12-standard-form-add-component';
import { X12StandardFormEditComponent } from './components/x12-standard-form-edit-component/x12-standard-form-edit-component';
import { X12Standard } from './x12-standard';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';

@NgModule({
  declarations: [
    X12Standard,
    X12StandardFormListComponent,
    X12StandardFormAddComponent,
    X12StandardFormEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    X12StandardRoutingModule,
    ConfirmDeleteDialogComponent
  ]
})
export class X12StandardModule{ }
