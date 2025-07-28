import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingPrvSecIdentification } from './billing-prv-sec-identification';
import { BillingProSecIdentificationListComponent } from './components/billing-pro-sec-identification-list-component/billing-pro-sec-identification-list-component';
import { BillingProSecIdentificationAddComponent } from './components/billing-pro-sec-identification-add-component/billing-pro-sec-identification-add-component';
import { BillingProSecIdentificationEditComponent } from './components/billing-pro-sec-identification-edit-component/billing-pro-sec-identification-edit-component';

const routes: Routes = [
  { path: '', component: BillingPrvSecIdentification },
  { path: 'list', component: BillingProSecIdentificationListComponent },
  { path: 'add', component: BillingProSecIdentificationAddComponent },
  { path: 'edit/:id', component: BillingProSecIdentificationEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingPrvSecIdentificationRoutingModule { }
