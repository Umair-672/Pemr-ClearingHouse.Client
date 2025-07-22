import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingProvider } from './billing-provider';
import { BillingProviderListComponent } from './components/billing-provider-list-component/billing-provider-list-component';
import { BillingProviderEditComponent } from './components/billing-provider-edit-component/billing-provider-edit-component';
import { BillingProviderAddComponent } from './components/billing-provider-add-component/billing-provider-add-component';

const routes: Routes = [
  {path: '', component: BillingProvider},
  {path: 'list', component: BillingProviderListComponent},
  {path: 'add', component: BillingProviderAddComponent},
  {path: 'edit/:id', component: BillingProviderEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingProviderRoutingModule { }
