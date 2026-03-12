import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VPNSettingsFormListComponent } from './components/vpn-settings-form-list-component/vpn-settings-form-list-component';
import { VPNSettingsFormAddComponent } from './components/vpn-settings-form-add-component/vpn-settings-form-add-component';
import { VPNSettingsFormEditComponent } from './components/vpn-settings-form-edit-component/vpn-settings-form-edit-component';
import { VPNSettings } from './vpn-settings';

const routes: Routes = [
  { path: '', component: VPNSettings},
  { path: 'add', component: VPNSettingsFormAddComponent },
  { path: 'edit/:id', component: VPNSettingsFormEditComponent },
  {path: 'list', component: VPNSettingsFormListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VPNSettingsRoutingModule { } 