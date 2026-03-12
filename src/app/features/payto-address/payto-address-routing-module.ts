import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaytoAddress } from './payto-address';
import { PaytoAddressFormAddComponent } from './components/payto-address-form-add-component/payto-address-form-add-component';
import { PaytoAddressFormEditComponent } from './components/payto-address-form-edit-component/payto-address-form-edit-component';

const routes: Routes = [
  { path: '', component: PaytoAddress },
  { path: 'add', component: PaytoAddressFormAddComponent },
  { path: 'edit/:id', component: PaytoAddressFormEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaytoAddressRoutingModule { }
