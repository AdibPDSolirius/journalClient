import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourcesFormComponent } from './resources-form/resources-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'resources', pathMatch: 'full'},
  {path: 'resources', component: ResourceListComponent },
  {path: 'resources/database/:id', component: ResourceListComponent},
  {path: 'resources/framework/:id', component: ResourceListComponent},
  {path: 'resources/language/:id', component: ResourceListComponent},
  {path: 'resources/library/:id', component: ResourceListComponent},
  {path: 'create', component: ResourcesFormComponent},
  {path: 'update/:id', component: ResourcesFormComponent},
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
