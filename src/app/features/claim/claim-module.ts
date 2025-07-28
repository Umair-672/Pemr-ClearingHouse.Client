import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ClaimRoutingModule } from './claim-routing-module';
import { Claim } from './claim';
import { ClaimListComponent } from './components/claim-list-component/claim-list-component';
import { ClaimAddComponent } from './components/claim-add-component/claim-add-component';
import { ClaimEditComponent } from './components/claim-edit-component/claim-edit-component';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { SearchableDropdownComponent } from "../../shared/components";

@NgModule({
  declarations: [
    Claim,
    ClaimListComponent,
    ClaimAddComponent,
    ClaimEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClaimRoutingModule,
    ConfirmDeleteDialogComponent,
    SearchableDropdownComponent
  ]
})
export class ClaimModule { }
