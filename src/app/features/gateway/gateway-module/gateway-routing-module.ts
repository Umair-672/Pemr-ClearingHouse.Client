import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Gateway } from '../gateway/gateway';

const routes: Routes = [
  { path: '', component: Gateway}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatewayRoutingModule { }
