import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatewayFormListComponent } from './components/gateway-form-list-component/gateway-form-list-component';
import { GatewayFormAddComponent } from './components/gateway-form-add-component/gateway-form-add-component';
import { GatewayFormEditComponent } from './components/gateway-form-edit-component/gateway-form-edit-component';
import { Gateway } from './gateway';

const routes: Routes = [
  { path: '', component: Gateway},
  { path: 'add', component: GatewayFormAddComponent },
  { path: 'edit/:id', component: GatewayFormEditComponent },
  {path: 'list', component: GatewayFormListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatewayRoutingModule { }
