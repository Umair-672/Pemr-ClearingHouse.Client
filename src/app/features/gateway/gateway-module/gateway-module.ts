import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gateway } from '../gateway/gateway';
import { GatewayRoutingModule } from './gateway-routing-module';


@NgModule({
  declarations: [
    Gateway
  ],
  imports: [
    CommonModule,
    GatewayRoutingModule
  ]
})
export class GatewayModule{ }
