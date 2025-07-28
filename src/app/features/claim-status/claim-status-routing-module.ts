import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimStatus } from './claim-status';

const routes: Routes = [
  {path: '', component: ClaimStatus},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimStatusRoutingModule { }
