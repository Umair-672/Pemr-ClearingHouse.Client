import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SubscriberRoutingModule } from './subscriber-routing-module';
import { SubscriberFormListComponent } from './components/subscriber-form-list-component/subscriber-form-list-component';
import { SubscriberFormAddComponent } from './components/subscriber-form-add-component/subscriber-form-add-component';
import { SubscriberFormEditComponent } from './components/subscriber-form-edit-component/subscriber-form-edit-component';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { Subscriber } from './subscriber';
import { SearchableDropdownComponent } from "../../shared/components";

@NgModule({
  declarations: [
    Subscriber,
    SubscriberFormListComponent,
    SubscriberFormAddComponent,
    SubscriberFormEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SubscriberRoutingModule,
    ConfirmDeleteDialogComponent,
    SearchableDropdownComponent
]
})
export class SubscriberModule { }
