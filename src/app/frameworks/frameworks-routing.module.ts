import { NgModule } from '@angular/core';
import {RouterModule, Router, Routes} from '@angular/router';

import { FrameworkListComponent } from './framework-list/framework-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'frameworks', pathMatch: 'full'},
  {path: 'frameworks', component: FrameworkListComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FrameworksRoutingModule { }
