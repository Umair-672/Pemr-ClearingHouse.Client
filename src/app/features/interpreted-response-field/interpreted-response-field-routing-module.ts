import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpretedResponseField } from './interpreted-response-field';
import { InterpretedResponseFieldFormAddComponent } from './components/interpreted-response-field-form-add-component/interpreted-response-field-form-add-component';
import { InterpretedResponseFieldFormEditComponent } from './components/interpreted-response-field-form-edit-component/interpreted-response-field-form-edit-component';

const routes: Routes = [
  { path: '', component: InterpretedResponseField },
  { path: 'add', component: InterpretedResponseFieldFormAddComponent },
  { path: 'edit/:id', component: InterpretedResponseFieldFormEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterpretedResponseFieldRoutingModule { }
