import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Claim } from './claim';
import { ClaimListComponent } from './components/claim-list-component/claim-list-component';
import { ClaimAddComponent } from './components/claim-add-component/claim-add-component';
import { ClaimEditComponent } from './components/claim-edit-component/claim-edit-component';

const routes: Routes = [
  { path: '', component: Claim },
  { path: 'list', component: ClaimListComponent },
  { path: 'add', component: ClaimAddComponent },
  { path: 'edit/:id', component: ClaimEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimRoutingModule { }
