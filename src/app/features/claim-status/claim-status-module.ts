import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClaimStatusRoutingModule } from './claim-status-routing-module';
import { ClaimStatus } from './claim-status';
import { ClaimStatusListComponent } from './components/claim-status-list-component/claim-status-list-component';
import { ClaimStatusAddComponent } from './components/claim-status-add-component/claim-status-add-component';
import { ClaimStatusEditComponent } from './components/claim-status-edit-component/claim-status-edit-component';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { SearchableDropdownComponent } from '../../shared/components/searchable-dropdown/searchable-dropdown.component';

@NgModule({
  declarations: [
    ClaimStatus,
    ClaimStatusListComponent,
    ClaimStatusAddComponent,
    ClaimStatusEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClaimStatusRoutingModule,
    ConfirmDeleteDialogComponent,
    SearchableDropdownComponent
  ]
})
export class ClaimStatusModule { }
