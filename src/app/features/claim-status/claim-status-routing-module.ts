import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimStatusAddComponent } from './components/claim-status-add-component/claim-status-add-component';
import { ClaimStatusEditComponent } from './components/claim-status-edit-component/claim-status-edit-component';
import { ClaimStatus } from './claim-status';
import { ClaimStatusListComponent } from './components/claim-status-list-component/claim-status-list-component';

const routes: Routes = [
  { path: '', component: ClaimStatus },
  {path: 'list', component: ClaimStatusListComponent },
  { path: 'add', component: ClaimStatusAddComponent },
  { path: 'edit/:id', component: ClaimStatusEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimStatusRoutingModule { }
