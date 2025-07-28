import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RTTransactionSettings } from './rttransaction-settings';

const routes: Routes = [
  {path: '', component: RTTransactionSettings},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RTTransactionSettingsRoutingModule { }
