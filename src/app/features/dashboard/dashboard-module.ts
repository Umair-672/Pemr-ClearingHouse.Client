import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { Dashboard } from './dashboard';
import { OrganizationFormListComponent } from '../organization/components/organization-form-list-component/organization-form-list-component';
import { OrganizationModule } from '../organization/organization-module';


@NgModule({
  declarations: [
    Dashboard
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    OrganizationModule
  ]
})
export class DashboardModule { }
