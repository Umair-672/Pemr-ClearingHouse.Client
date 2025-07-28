import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpretationField } from './interpretation-field';

const routes: Routes = [
  {path: '', component: InterpretationField},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterpretationFieldRoutingModule { }
