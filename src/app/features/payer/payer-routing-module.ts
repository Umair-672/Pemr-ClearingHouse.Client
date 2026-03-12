import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Payer } from './payer';
import { PayerFormAddComponent } from './components/payer-form-add-component/payer-form-add-component';
import { PayerFormEditComponent } from './components/payer-form-edit-component/payer-form-edit-component';
import { PayerFormListComponent } from './components/payer-form-list-component/payer-form-list-component';

const routes: Routes = [
  { path: '', component: Payer },
  { path: 'add', component: PayerFormAddComponent },
  { path: 'edit/:id', component: PayerFormEditComponent },
  { path: 'list', component: PayerFormListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayerRoutingModule { }
