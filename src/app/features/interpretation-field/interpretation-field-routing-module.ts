import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpretationField } from './interpretation-field';
import { InterpretationFieldFormAddComponent } from './components/interpretation-field-form-add-component/interpretation-field-form-add-component';
import { InterpretationFieldFormEditComponent } from './components/interpretation-field-form-edit-component/interpretation-field-form-edit-component';

const routes: Routes = [
  { path: '', component: InterpretationField },
  { path: 'add', component: InterpretationFieldFormAddComponent },
  { path: 'edit/:id', component: InterpretationFieldFormEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterpretationFieldRoutingModule { }
