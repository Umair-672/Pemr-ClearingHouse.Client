import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ClaimEntityRoutingModule } from './claim-entity-routing-module';
import { ClaimEntity } from './claim-entity';
import { ClaimEntityListComponent } from './components/claim-entity-list-component/claim-entity-list-component';
import { ClaimEntityAddComponent } from './components/claim-entity-add-component/claim-entity-add-component';
import { ClaimEntityEditComponent } from './components/claim-entity-edit-component/claim-entity-edit-component';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { SearchableDropdownComponent } from "../../shared/components";

@NgModule({
  declarations: [
    ClaimEntity,
    ClaimEntityListComponent,
    ClaimEntityAddComponent,
    ClaimEntityEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClaimEntityRoutingModule,
    ConfirmDeleteDialogComponent,
    SearchableDropdownComponent
  ]
})
export class ClaimEntityModule { }
