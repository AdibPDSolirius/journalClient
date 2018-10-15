import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LibraryFormComponent} from './library-form/library-form.component';
import { LibraryListComponent } from './library-list/library-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'libraries', pathMatch: 'full'},
  {path: 'libraries', component: LibraryListComponent},
  {path: 'create', component: LibraryFormComponent},
  {path: 'update/:id', component: LibraryFormComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LibrariesRoutingModule { }
