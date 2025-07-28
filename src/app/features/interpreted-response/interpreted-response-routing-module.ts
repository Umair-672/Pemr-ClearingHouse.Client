import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpretedResponse } from './interpreted-response';

const routes: Routes = [
  {path: '', component: InterpretedResponse},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterpretedResponseRoutingModule { }
