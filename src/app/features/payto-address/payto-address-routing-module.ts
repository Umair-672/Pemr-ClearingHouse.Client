import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaytoAddress } from './payto-address';

const routes: Routes = [
  {path: '', component: PaytoAddress},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaytoAddressRoutingModule { }
