import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimEntity } from './claim-entity';
import { ClaimEntityListComponent } from './components/claim-entity-list-component/claim-entity-list-component';
import { ClaimEntityAddComponent } from './components/claim-entity-add-component/claim-entity-add-component';
import { ClaimEntityEditComponent } from './components/claim-entity-edit-component/claim-entity-edit-component';

const routes: Routes = [
  { path: '', component: ClaimEntity },
  { path: 'list', component: ClaimEntityListComponent },
  { path: 'add', component: ClaimEntityAddComponent },
  { path: 'edit/:id', component: ClaimEntityEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimEntityRoutingModule { }
