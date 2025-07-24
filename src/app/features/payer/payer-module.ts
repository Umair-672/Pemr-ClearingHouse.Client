import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayerRoutingModule } from './payer-routing-module';
import { PayerFormListComponent } from './components/payer-form-list-component/payer-form-list-component';
import { ReactiveFormsModule } from '@angular/forms';
import { Payer } from './payer';
import { PayerFormAddComponent } from './components/payer-form-add-component/payer-form-add-component';
import { PayerFormEditComponent } from './components/payer-form-edit-component/payer-form-edit-component';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { SearchableDropdownComponent } from '../../shared/components';

@NgModule({
  declarations: [
    Payer,
    PayerFormListComponent,
    PayerFormAddComponent,
    PayerFormEditComponent
  ],
  imports: [
    CommonModule,
    PayerRoutingModule,
    ReactiveFormsModule,
    SearchableDropdownComponent,
    ConfirmDeleteDialogComponent
  ]
})
export class PayerModule { }
