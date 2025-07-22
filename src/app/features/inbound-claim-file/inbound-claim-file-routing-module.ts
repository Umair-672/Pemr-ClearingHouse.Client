import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboundClaimFile } from './inbound-claim-file';

const routes: Routes = [
  {path: '', component: InboundClaimFile}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboundClaimFileRoutingModule { }
