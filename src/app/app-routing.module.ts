import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'resource/resources', pathMatch: 'full'},
  {path: 'resource', loadChildren: 'src/app/resources/resources.module#ResourcesModule'},
  {path: 'language', loadChildren: 'src/app/languages/languages.module#LanguagesModule'},
  {path: 'database', loadChildren: 'src/app/databases/databases.module#DatabasesModule'}
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
