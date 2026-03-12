import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RTTransactionSettingsRoutingModule } from './rt-transaction-settings-routing-module';
import { RTTransactionSettings } from './rt-transaction-settings';
import { RTTransactionSettingsFormListComponent } from './components/rt-transaction-settings-form-list-component/rt-transaction-settings-form-list-component';
import { RTTransactionSettingsFormAddComponent } from './components/rt-transaction-settings-form-add-component/rt-transaction-settings-form-add-component';
import { RTTransactionSettingsFormEditComponent } from './components/rt-transaction-settings-form-edit-component/rt-transaction-settings-form-edit-component';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { SearchableDropdownComponent } from '../../shared/components/searchable-dropdown/searchable-dropdown.component';

@NgModule({
  declarations: [
    RTTransactionSettings,
    RTTransactionSettingsFormListComponent,
    RTTransactionSettingsFormAddComponent,
    RTTransactionSettingsFormEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RTTransactionSettingsRoutingModule,
    ConfirmDeleteDialogComponent,
    SearchableDropdownComponent
  ]
})
export class RTTransactionSettingsModule { } 