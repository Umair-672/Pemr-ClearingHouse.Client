import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OrganizationRoutingModule } from './organization-routing-module';
import { Organization } from './organization';
import { OrganizationFormAddComponent } from './components/organization-form-add-component/organization-form-add-component';
import { OrganizationFormEditComponent } from './components/organization-form-edit-component/organization-form-edit-component';
import { OrganizationFormListComponent } from './components/organization-form-list-component/organization-form-list-component';
import { OrganizationDeleteDialog } from './dialogs/organization-delete-dialog/organization-delete-dialog';


@NgModule({
  declarations: [
    Organization,
    OrganizationFormAddComponent,
    OrganizationFormEditComponent,
    OrganizationFormListComponent,
    OrganizationDeleteDialog
  ],
  exports: [
    OrganizationFormListComponent

  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    ReactiveFormsModule
]
})
export class OrganizationModule { }
