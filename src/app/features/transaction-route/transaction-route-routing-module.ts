import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionRoute } from './transaction-route';
import { TransactionRouteFormAddComponent } from './components/transaction-route-form-add-component/transaction-route-form-add-component';
import { TransactionRouteFormEditComponent } from './components/transaction-route-form-edit-component/transaction-route-form-edit-component';

const routes: Routes = [
  { path: '', component: TransactionRoute },
  { path: 'add', component: TransactionRouteFormAddComponent },
  { path: 'edit/:id', component: TransactionRouteFormEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRouteRoutingModule { }
