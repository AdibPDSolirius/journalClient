import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'resource', loadChildren: 'src/app/resources/resources.module#ResourcesModule'},
  {path: 'language', loadChildren: 'src/app/languages/languages.module#LanguagesModule'},
  {path: '', redirectTo: 'resource/resources', pathMatch: 'full'}
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
