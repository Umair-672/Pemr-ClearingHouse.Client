import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OutboundTransactionRoutingModule } from './outbound-transaction-routing-module';
import { OutboundTransaction } from './outbound-transaction';
import { OutboundTransactionListComponent } from './components/outbound-transaction-list-component/outbound-transaction-list-component';
import { OutboundTransactionAddComponent } from './components/outbound-transaction-add-component/outbound-transaction-add-component';
import { OutboundTransactionEditComponent } from './components/outbound-transaction-edit-component/outbound-transaction-edit-component';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { SearchableDropdownComponent } from '../../shared/components/searchable-dropdown/searchable-dropdown.component';

@NgModule({
  declarations: [
    OutboundTransaction,
    OutboundTransactionListComponent,
    OutboundTransactionAddComponent,
    OutboundTransactionEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OutboundTransactionRoutingModule,
    ConfirmDeleteDialogComponent,
    SearchableDropdownComponent
  ]
})
export class OutboundTransactionModule { }
