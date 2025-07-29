import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FTPSettings } from './ftp-settings';
import { FTPSettingsAddComponent } from './components/ftp-settings-add-component/ftp-settings-add-component';
import { FTPSettingsEditComponent } from './components/ftp-settings-edit-component/ftp-settings-edit-component';

const routes: Routes = [
  { path: '', component: FTPSettings },
  { path: 'add', component: FTPSettingsAddComponent },
  { path: 'edit/:id', component: FTPSettingsEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FTPSettingsRoutingModule { }
