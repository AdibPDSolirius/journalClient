import { NgModule } from '@angular/core';
import {RouterModule, Router, Routes} from '@angular/router';

import { FrameworkListComponent } from './framework-list/framework-list.component';
import { FrameworkFormComponent } from './framework-form/framework-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'frameworks', pathMatch: 'full'},
  {path: 'frameworks', component: FrameworkListComponent},
  {path: 'create', component: FrameworkFormComponent},
  {path: 'update/:id', component: FrameworkFormComponent}
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
