import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { DatabaseListComponent } from './database-list/database-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'databases', pathMatch: 'full'},
  {path: 'databases', component: DatabaseListComponent},
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
