import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponseKeywordField } from './response-keyword-field';

const routes: Routes = [
  {path: '', component: ResponseKeywordField},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponseKeywordFieldRoutingModule { }
