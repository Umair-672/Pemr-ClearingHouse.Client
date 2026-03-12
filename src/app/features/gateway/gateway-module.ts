import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GatewayRoutingModule } from './gateway-routing-module';
import { GatewayFormListComponent } from './components/gateway-form-list-component/gateway-form-list-component';
import { GatewayFormAddComponent } from './components/gateway-form-add-component/gateway-form-add-component';
import { GatewayFormEditComponent } from './components/gateway-form-edit-component/gateway-form-edit-component';
import { Gateway } from './gateway';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';

@NgModule({
  declarations: [
    Gateway,
    GatewayFormListComponent,
    GatewayFormAddComponent,
    GatewayFormEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GatewayRoutingModule,
    ConfirmDeleteDialogComponent
  ]
})
export class GatewayModule{ }
