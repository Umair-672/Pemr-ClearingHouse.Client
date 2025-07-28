import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { X12Standard } from './x12-standard';

const routes: Routes = [
  {path: '', component: X12Standard},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class X12StandardRoutingModule { }
