import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutboundClaimFile } from './outbound-claim-file';

const routes: Routes = [
  {path: '', component: OutboundClaimFile},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutboundClaimFileRoutingModule { }
