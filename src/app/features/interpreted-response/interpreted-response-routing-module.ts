import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpretedResponse } from './interpreted-response';
import { InterpretedResponseFormAddComponent } from './components/interpreted-response-form-add-component/interpreted-response-form-add-component';
import { InterpretedResponseFormEditComponent } from './components/interpreted-response-form-edit-component/interpreted-response-form-edit-component';

const routes: Routes = [
  { path: '', component: InterpretedResponse },
  { path: 'add', component: InterpretedResponseFormAddComponent },
  { path: 'edit/:id', component: InterpretedResponseFormEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterpretedResponseRoutingModule { }
