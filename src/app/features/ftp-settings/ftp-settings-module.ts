import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FTPSettingsRoutingModule } from './ftp-settings-routing-module';
import { FTPSettings } from './ftp-settings';
import { FTPSettingsListComponent } from './components/ftp-settings-list-component/ftp-settings-list-component';
import { FTPSettingsAddComponent } from './components/ftp-settings-add-component/ftp-settings-add-component';
import { FTPSettingsEditComponent } from './components/ftp-settings-edit-component/ftp-settings-edit-component';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { SearchableDropdownComponent } from '../../shared/components/searchable-dropdown/searchable-dropdown.component';

@NgModule({
  declarations: [
    FTPSettings,
    FTPSettingsListComponent,
    FTPSettingsAddComponent,
    FTPSettingsEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FTPSettingsRoutingModule,
    ConfirmDeleteDialogComponent,
    SearchableDropdownComponent
  ]
})
export class FTPSettingsModule { } 