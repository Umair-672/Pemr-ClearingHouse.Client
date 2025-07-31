import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PaytoAddressRoutingModule } from './payto-address-routing-module';
import { PaytoAddress } from './payto-address';
import { PaytoAddressFormListComponent } from './components/payto-address-form-list-component/payto-address-form-list-component';
import { PaytoAddressFormAddComponent } from './components/payto-address-form-add-component/payto-address-form-add-component';
import { PaytoAddressFormEditComponent } from './components/payto-address-form-edit-component/payto-address-form-edit-component';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { SearchableDropdownComponent } from '../../shared/components/searchable-dropdown/searchable-dropdown.component';

@NgModule({
  declarations: [
    PaytoAddress,
    PaytoAddressFormListComponent,
    PaytoAddressFormAddComponent,
    PaytoAddressFormEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PaytoAddressRoutingModule,
    ConfirmDeleteDialogComponent,
    SearchableDropdownComponent
  ]
})
export class PaytoAddressModule { }
