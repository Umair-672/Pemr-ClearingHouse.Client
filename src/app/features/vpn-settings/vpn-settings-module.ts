import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { VPNSettingsRoutingModule } from './vpn-settings-routing-module';
import { VPNSettingsFormListComponent } from './components/vpn-settings-form-list-component/vpn-settings-form-list-component';
import { VPNSettingsFormAddComponent } from './components/vpn-settings-form-add-component/vpn-settings-form-add-component';
import { VPNSettingsFormEditComponent } from './components/vpn-settings-form-edit-component/vpn-settings-form-edit-component';
import { VPNSettings } from './vpn-settings';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { SearchableDropdownComponent } from '../../shared/components/searchable-dropdown/searchable-dropdown.component';

@NgModule({
  declarations: [
    VPNSettings,
    VPNSettingsFormListComponent,
    VPNSettingsFormAddComponent,
    VPNSettingsFormEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VPNSettingsRoutingModule,
    ConfirmDeleteDialogComponent,
    SearchableDropdownComponent
  ]
})
export class VPNSettingsModule{ } 