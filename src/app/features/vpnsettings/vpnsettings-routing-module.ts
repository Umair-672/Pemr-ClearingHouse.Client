import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VPNSettings } from './vpnsettings';

const routes: Routes = [
  {path: '', component: VPNSettings},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VPNSettingsRoutingModule { }
