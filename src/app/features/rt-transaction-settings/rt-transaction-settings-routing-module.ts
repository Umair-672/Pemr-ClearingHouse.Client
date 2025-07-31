import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RTTransactionSettings } from './rt-transaction-settings';
import { RTTransactionSettingsFormAddComponent } from './components/rt-transaction-settings-form-add-component/rt-transaction-settings-form-add-component';
import { RTTransactionSettingsFormEditComponent } from './components/rt-transaction-settings-form-edit-component/rt-transaction-settings-form-edit-component';

const routes: Routes = [
  { path: '', component: RTTransactionSettings },
  { path: 'add', component: RTTransactionSettingsFormAddComponent },
  { path: 'edit/:id', component: RTTransactionSettingsFormEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RTTransactionSettingsRoutingModule { } 