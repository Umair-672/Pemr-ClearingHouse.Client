import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutboundClaimFile } from './outbound-claim-file';
import { OutboundClaimFileAddComponent } from './components/outbound-claim-file-add-component/outbound-claim-file-add-component';
import { OutboundClaimFileEditComponent } from './components/outbound-claim-file-edit-component/outbound-claim-file-edit-component';

const routes: Routes = [
  { path: '', component: OutboundClaimFile },
  { path: 'add', component: OutboundClaimFileAddComponent },
  { path: 'edit/:id', component: OutboundClaimFileEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutboundClaimFileRoutingModule { }
