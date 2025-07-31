import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionRouteRoutingModule } from './transaction-route-routing-module';
import { TransactionRoute } from './transaction-route';
import { TransactionRouteFormListComponent } from './components/transaction-route-form-list-component/transaction-route-form-list-component';
import { TransactionRouteFormAddComponent } from './components/transaction-route-form-add-component/transaction-route-form-add-component';
import { TransactionRouteFormEditComponent } from './components/transaction-route-form-edit-component/transaction-route-form-edit-component';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { SearchableDropdownComponent } from '../../shared/components/searchable-dropdown/searchable-dropdown.component';

@NgModule({
  declarations: [
    TransactionRoute,
    TransactionRouteFormListComponent,
    TransactionRouteFormAddComponent,
    TransactionRouteFormEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TransactionRouteRoutingModule,
    ConfirmDeleteDialogComponent,
    SearchableDropdownComponent
  ]
})
export class TransactionRouteModule { }
