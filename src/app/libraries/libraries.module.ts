import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { DynamicListModule } from '../shared/dynamic-list/dynamic-list.module';
import { LibraryListComponent } from './library-list/library-list.component';
import { LibrariesRoutingModule } from './libraries-routing.module';
import { LibraryFormComponent } from './library-form/library-form.component';

@NgModule({
  imports: [
    CommonModule,
    DynamicFormModule,
    DynamicListModule,
    LibrariesRoutingModule
  ],
  declarations: [
    LibraryListComponent,
    LibraryFormComponent
  ]
})
export class LibrariesModule { }
