import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponseKeywordField } from './response-keyword-field';
import { ResponseKeywordFieldFormAddComponent } from './components/response-keyword-field-form-add-component/response-keyword-field-form-add-component';
import { ResponseKeywordFieldFormEditComponent } from './components/response-keyword-field-form-edit-component/response-keyword-field-form-edit-component';

const routes: Routes = [
  { path: '', component: ResponseKeywordField },
  { path: 'add', component: ResponseKeywordFieldFormAddComponent },
  { path: 'edit/:id', component: ResponseKeywordFieldFormEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponseKeywordFieldRoutingModule { }
