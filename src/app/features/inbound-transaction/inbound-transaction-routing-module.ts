import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboundTransaction } from './inbound-transaction';
import { InboundTransactionListComponent } from './components/inbound-transaction-list-component/inbound-transaction-list-component';
import { InboundTransactionAddComponent } from './components/inbound-transaction-add-component/inbound-transaction-add-component';
import { InboundTransactionEditComponent } from './components/inbound-transaction-edit-component/inbound-transaction-edit-component';

const routes: Routes = [
  {path: '', component: InboundTransaction},
  {path: 'list', component: InboundTransactionListComponent},
  {path: 'add', component: InboundTransactionAddComponent},
  {path: 'edit/:id', component: InboundTransactionEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboundTransactionRoutingModule { }
