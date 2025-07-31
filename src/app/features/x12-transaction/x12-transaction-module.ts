import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { X12TransactionRoutingModule } from './x12-transaction-routing-module';
import { X12TransactionFormListComponent } from './components/x12-transaction-form-list-component/x12-transaction-form-list-component';
import { X12TransactionFormAddComponent } from './components/x12-transaction-form-add-component/x12-transaction-form-add-component';
import { X12TransactionFormEditComponent } from './components/x12-transaction-form-edit-component/x12-transaction-form-edit-component';
import { X12Transaction } from './x12-transaction';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { SearchableDropdownComponent } from '../../shared/components/searchable-dropdown/searchable-dropdown.component';

@NgModule({
  declarations: [
    X12Transaction,
    X12TransactionFormListComponent,
    X12TransactionFormAddComponent,
    X12TransactionFormEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    X12TransactionRoutingModule,
    ConfirmDeleteDialogComponent,
    SearchableDropdownComponent
  ]
})
export class X12TransactionModule{ }
