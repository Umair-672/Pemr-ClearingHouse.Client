import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpretedResponseField } from './interpreted-response-field';

const routes: Routes = [
  {path: '', component: InterpretedResponseField},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterpretedResponseFieldRoutingModule { }
