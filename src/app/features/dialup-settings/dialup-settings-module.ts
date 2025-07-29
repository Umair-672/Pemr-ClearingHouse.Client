import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DialupSettingsRoutingModule } from './dialup-settings-routing-module';
import { DialupSettings } from './dialup-settings';
import { DialupSettingsListComponent } from './components/dialup-settings-list-component/dialup-settings-list-component';
import { DialupSettingsAddComponent } from './components/dialup-settings-add-component/dialup-settings-add-component';
import { DialupSettingsEditComponent } from './components/dialup-settings-edit-component/dialup-settings-edit-component';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';

@NgModule({
  declarations: [
    DialupSettings,
    DialupSettingsListComponent,
    DialupSettingsAddComponent,
    DialupSettingsEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DialupSettingsRoutingModule,
    ConfirmDeleteDialogComponent
  ]
})
export class DialupSettingsModule { }
