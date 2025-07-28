import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FTPSettings } from './ftpsettings';

const routes: Routes = [
  {path: '', component: FTPSettings},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FTPSettingsRoutingModule { }
