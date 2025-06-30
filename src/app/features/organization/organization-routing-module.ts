import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Organization } from './organization';
import { OrganizationFormAddComponent } from './components/organization-form-add-component/organization-form-add-component';
import { OrganizationFormEditComponent } from './components/organization-form-edit-component/organization-form-edit-component';
import { OrganizationFormListComponent } from './components/organization-form-list-component/organization-form-list-component';

const routes: Routes = [
  {path: '', component: Organization},
  {path: 'add', component: OrganizationFormAddComponent},
  {path: 'edit/:id', component: OrganizationFormEditComponent},
  {path: 'list', component: OrganizationFormListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
