import { ConfirmDeleteDialogComponent } from './../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingProviderRoutingModule } from './billing-provider-routing-module';
import { BillingProviderListComponent } from './components/billing-provider-list-component/billing-provider-list-component';
import { BillingProviderAddComponent } from './components/billing-provider-add-component/billing-provider-add-component';
import { BillingProviderEditComponent } from './components/billing-provider-edit-component/billing-provider-edit-component';
import { BillingProvider } from './billing-provider';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BillingProvider,
    BillingProviderListComponent,
    BillingProviderAddComponent,
    BillingProviderEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BillingProviderRoutingModule,
    ConfirmDeleteDialogComponent
  ]
})
export class BillingProviderModule { }
