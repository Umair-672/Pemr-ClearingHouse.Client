import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboundClaimFile } from './inbound-claim-file';
import { InboundClaimFileListComponent } from './components/inbound-claim-file-list-component/inbound-claim-file-list-component';
import { InboundClaimFileAddComponent } from './components/inbound-claim-file-add-component/inbound-claim-file-add-component';
import { InboundClaimFileEditComponent } from './components/inbound-claim-file-edit-component/inbound-claim-file-edit-component';

const routes: Routes = [
  {path: '', component: InboundClaimFile},
  {path: 'list', component: InboundClaimFileListComponent},
  {path: 'add', component: InboundClaimFileAddComponent},
  {path: 'edit/:id', component: InboundClaimFileEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboundClaimFileRoutingModule { }
