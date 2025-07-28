import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpretationEntity } from './interpretation-entity';

const routes: Routes = [
  {path: '', component: InterpretationEntity},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterpretationEntityRoutingModule { }
