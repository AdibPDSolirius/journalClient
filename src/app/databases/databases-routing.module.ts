import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { DatabaseFormComponent } from './database-form/database-form.component';
import { DatabaseListComponent } from './database-list/database-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'databases', pathMatch: 'full'},
  {path: 'databases', component: DatabaseListComponent},
  {path: 'create', component: DatabaseFormComponent},
  {path: 'update/:id', component: DatabaseFormComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DatabasesRoutingModule { }
