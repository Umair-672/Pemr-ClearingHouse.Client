import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionRoute } from './transaction-route';

const routes: Routes = [
  {path: '', component: TransactionRoute},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRouteRoutingModule { }
