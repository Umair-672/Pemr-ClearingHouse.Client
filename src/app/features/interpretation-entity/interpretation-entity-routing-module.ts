import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpretationEntityFormListComponent } from './components/interpretation-entity-form-list-component/interpretation-entity-form-list-component';
import { InterpretationEntityFormAddComponent } from './components/interpretation-entity-form-add-component/interpretation-entity-form-add-component';
import { InterpretationEntityFormEditComponent } from './components/interpretation-entity-form-edit-component/interpretation-entity-form-edit-component';
import { InterpretationEntity } from './interpretation-entity';

const routes: Routes = [
  { path: '', component: InterpretationEntity},
  { path: 'add', component: InterpretationEntityFormAddComponent },
  { path: 'edit/:id', component: InterpretationEntityFormEditComponent },
  {path: 'list', component: InterpretationEntityFormListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterpretationEntityRoutingModule { }
