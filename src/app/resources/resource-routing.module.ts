import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResourceDetailComponent } from './resource-detail/resource-detail.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourcesFormComponent } from './resources-form/resources-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'resources', pathMatch: 'full'},
  {path: 'resources', component: ResourceListComponent },
  {path: 'create', component: ResourcesFormComponent},
  {path: 'update/:id', component: ResourcesFormComponent},
  {path: ':id', component: ResourceDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ResourceRoutingModule { }
