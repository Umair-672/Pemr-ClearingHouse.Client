import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponseKeyword } from './response-keyword';

const routes: Routes = [
  {path: '', component: ResponseKeyword},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponseKeywordRoutingModule { }
