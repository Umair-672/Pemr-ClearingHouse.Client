import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutboundClaim } from './outbound-claim';

const routes: Routes = [
  {path: '', component: OutboundClaim},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutboundClaimRoutingModule { }
