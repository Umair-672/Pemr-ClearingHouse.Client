import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subscriber } from './subscriber';
import { SubscriberFormListComponent } from './components/subscriber-form-list-component/subscriber-form-list-component';
import { SubscriberFormAddComponent } from './components/subscriber-form-add-component/subscriber-form-add-component';
import { SubscriberFormEditComponent } from './components/subscriber-form-edit-component/subscriber-form-edit-component';

const routes: Routes = [
  {path: '', component: Subscriber},
  {path: 'list', component: SubscriberFormListComponent},
  {path: 'add', component: SubscriberFormAddComponent},
  {path: 'edit/:id', component: SubscriberFormEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriberRoutingModule { }
