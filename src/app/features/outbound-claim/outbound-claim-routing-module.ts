import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutboundClaim } from './outbound-claim';
import { OutboundClaimAddComponent } from './components/outbound-claim-add-component/outbound-claim-add-component';
import { OutboundClaimEditComponent } from './components/outbound-claim-edit-component/outbound-claim-edit-component';
import { OutboundClaimListComponent } from './components/outbound-claim-list-component/outbound-claim-list-component';

const routes: Routes = [
  {path: '', component: OutboundClaim},
  {path: 'list', component: OutboundClaimListComponent},
  {path: 'add', component: OutboundClaimAddComponent},
  {path: 'edit/:id', component: OutboundClaimEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutboundClaimRoutingModule { }
