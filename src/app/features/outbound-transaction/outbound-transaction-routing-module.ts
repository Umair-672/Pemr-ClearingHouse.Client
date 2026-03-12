import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutboundTransaction } from './outbound-transaction';
import { OutboundTransactionAddComponent } from './components/outbound-transaction-add-component/outbound-transaction-add-component';
import { OutboundTransactionEditComponent } from './components/outbound-transaction-edit-component/outbound-transaction-edit-component';
import { OutboundTransactionListComponent } from './components/outbound-transaction-list-component/outbound-transaction-list-component';

const routes: Routes = [
  { path: '', component: OutboundTransaction },
  {path: 'list', component: OutboundTransactionListComponent },
  { path: 'add', component: OutboundTransactionAddComponent },
  { path: 'edit/:id', component: OutboundTransactionEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutboundTransactionRoutingModule { }
