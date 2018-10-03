import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { DynamicListModule } from '../shared/dynamic-list/dynamic-list.module';
import { FrameworkListComponent } from './framework-list/framework-list.component';
import { FrameworksRoutingModule } from './frameworks-routing.module';
import { FrameworkFormComponent } from './framework-form/framework-form.component';

@NgModule({
  imports: [
    CommonModule,
    DynamicFormModule,
    DynamicListModule,
    FrameworksRoutingModule
  ],
  declarations: [
    FrameworkListComponent,
    FrameworkFormComponent]
})
export class FrameworksModule { }
