import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { X12Transaction } from './x12-transaction';

const routes: Routes = [
  {path: '', component: X12Transaction},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class X12TransactionRoutingModule { }
