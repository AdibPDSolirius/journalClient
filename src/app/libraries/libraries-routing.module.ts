import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibraryListComponent } from './library-list/library-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'libraries', pathMatch: 'full'},
  {path: 'libraries', component: LibraryListComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LibrariesRoutingModule { }
