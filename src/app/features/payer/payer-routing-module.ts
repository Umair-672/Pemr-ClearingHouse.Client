import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Payer } from './payer';

const routes: Routes = [
  {path: '',  component: Payer}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayerRoutingModule { }
