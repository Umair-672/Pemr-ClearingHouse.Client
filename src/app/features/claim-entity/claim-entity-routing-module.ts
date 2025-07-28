import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimEntity } from './claim-entity';

const routes: Routes = [
  {path: '', component: ClaimEntity},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimEntityRoutingModule { }
