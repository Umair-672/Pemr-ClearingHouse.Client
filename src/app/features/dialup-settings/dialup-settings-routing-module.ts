import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialupSettings } from './dialup-settings';

const routes: Routes = [
  {path: '', component: DialupSettings},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DialupSettingsRoutingModule { }
