import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'resource', pathMatch: 'full'},
  {path: 'resource', loadChildren: 'src/app/resources/resources.module#ResourcesModule'},
  {path: 'language', loadChildren: 'src/app/languages/languages.module#LanguagesModule'},
  {path: 'database', loadChildren: 'src/app/databases/databases.module#DatabasesModule'},
  {path: 'framework', loadChildren: 'src/app/frameworks/frameworks.module#FrameworksModule'},
  {path: 'library', loadChildren: 'src/app/libraries/libraries.module#LibrariesModule'}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
