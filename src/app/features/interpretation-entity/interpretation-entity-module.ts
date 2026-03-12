import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InterpretationEntityRoutingModule } from './interpretation-entity-routing-module';
import { InterpretationEntityFormListComponent } from './components/interpretation-entity-form-list-component/interpretation-entity-form-list-component';
import { InterpretationEntityFormAddComponent } from './components/interpretation-entity-form-add-component/interpretation-entity-form-add-component';
import { InterpretationEntityFormEditComponent } from './components/interpretation-entity-form-edit-component/interpretation-entity-form-edit-component';
import { InterpretationEntity } from './interpretation-entity';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';

@NgModule({
  declarations: [
    InterpretationEntity,
    InterpretationEntityFormListComponent,
    InterpretationEntityFormAddComponent,
    InterpretationEntityFormEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InterpretationEntityRoutingModule,
    ConfirmDeleteDialogComponent
  ]
})
export class InterpretationEntityModule{ }
