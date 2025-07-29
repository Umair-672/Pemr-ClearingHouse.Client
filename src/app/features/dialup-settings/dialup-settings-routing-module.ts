import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialupSettings } from './dialup-settings';
import { DialupSettingsAddComponent } from './components/dialup-settings-add-component/dialup-settings-add-component';
import { DialupSettingsEditComponent } from './components/dialup-settings-edit-component/dialup-settings-edit-component';

const routes: Routes = [
  { path: '', component: DialupSettings },
  { path: 'add', component: DialupSettingsAddComponent },
  { path: 'edit/:id', component: DialupSettingsEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DialupSettingsRoutingModule { }
