import { ConfirmDeleteDialogComponent } from './../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboundTransactionRoutingModule } from './inbound-transaction-routing-module';
import { InboundTransactionListComponent } from './components/inbound-transaction-list-component/inbound-transaction-list-component';
import { InboundTransactionAddComponent } from './components/inbound-transaction-add-component/inbound-transaction-add-component';
import { InboundTransactionEditComponent } from './components/inbound-transaction-edit-component/inbound-transaction-edit-component';
import { InboundTransaction } from './inbound-transaction';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InboundTransaction,
    InboundTransactionListComponent,
    InboundTransactionAddComponent,
    InboundTransactionEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ConfirmDeleteDialogComponent,
    InboundTransactionRoutingModule
  ]
})
export class InboundTransactionModule { }
