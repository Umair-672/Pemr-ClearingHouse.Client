import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponseKeywordFormListComponent } from './components/response-keyword-form-list-component/response-keyword-form-list-component';
import { ResponseKeywordFormAddComponent } from './components/response-keyword-form-add-component/response-keyword-form-add-component';
import { ResponseKeywordFormEditComponent } from './components/response-keyword-form-edit-component/response-keyword-form-edit-component';
import { ResponseKeyword } from './response-keyword';

const routes: Routes = [
  { path: '', component: ResponseKeyword},
  { path: 'add', component: ResponseKeywordFormAddComponent },
  { path: 'edit/:id', component: ResponseKeywordFormEditComponent },
  {path: 'list', component: ResponseKeywordFormListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponseKeywordRoutingModule { }
