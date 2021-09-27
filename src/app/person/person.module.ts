import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonRoutingModule } from './person-routing.module';
import  {PersonCreateComponent} from  './person-create/person-create.component'
import {PersonListComponent} from './person-list/person-list.component'
import {PersonEditComponent} from './person-edit/person-edit.component'

const routes: Routes = [
  {
    path : 'list',
    component : PersonListComponent
  },
  {
    path : 'create',
    component : PersonCreateComponent
  },
  {
    path : 'edit/:id',
    component : PersonEditComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonModule { }
