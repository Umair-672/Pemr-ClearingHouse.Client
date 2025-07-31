import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { X12TransactionFormListComponent } from './components/x12-transaction-form-list-component/x12-transaction-form-list-component';
import { X12TransactionFormAddComponent } from './components/x12-transaction-form-add-component/x12-transaction-form-add-component';
import { X12TransactionFormEditComponent } from './components/x12-transaction-form-edit-component/x12-transaction-form-edit-component';
import { X12Transaction } from './x12-transaction';

const routes: Routes = [
  { path: '', component: X12Transaction},
  { path: 'add', component: X12TransactionFormAddComponent },
  { path: 'edit/:id', component: X12TransactionFormEditComponent },
  {path: 'list', component: X12TransactionFormListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class X12TransactionRoutingModule { }
