import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { X12StandardFormListComponent } from './components/x12-standard-form-list-component/x12-standard-form-list-component';
import { X12StandardFormAddComponent } from './components/x12-standard-form-add-component/x12-standard-form-add-component';
import { X12StandardFormEditComponent } from './components/x12-standard-form-edit-component/x12-standard-form-edit-component';
import { X12Standard } from './x12-standard';

const routes: Routes = [
  { path: '', component: X12Standard},
  { path: 'add', component: X12StandardFormAddComponent },
  { path: 'edit/:id', component: X12StandardFormEditComponent },
  {path: 'list', component: X12StandardFormListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class X12StandardRoutingModule { }
