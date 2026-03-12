import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BillingPrvSecIdentificationRoutingModule } from './billing-prv-sec-identification-routing-module';
import { BillingPrvSecIdentification } from './billing-prv-sec-identification';
import { BillingProSecIdentificationListComponent } from './components/billing-pro-sec-identification-list-component/billing-pro-sec-identification-list-component';
import { BillingProSecIdentificationAddComponent } from './components/billing-pro-sec-identification-add-component/billing-pro-sec-identification-add-component';
import { BillingProSecIdentificationEditComponent } from './components/billing-pro-sec-identification-edit-component/billing-pro-sec-identification-edit-component';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { SearchableDropdownComponent } from "../../shared/components";

@NgModule({
  declarations: [
    BillingPrvSecIdentification,
    BillingProSecIdentificationListComponent,
    BillingProSecIdentificationAddComponent,
    BillingProSecIdentificationEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BillingPrvSecIdentificationRoutingModule,
    ConfirmDeleteDialogComponent,
    SearchableDropdownComponent
  ]
})
export class BillingPrvSecIdentificationModule { }
