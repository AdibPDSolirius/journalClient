import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FrameworkListComponent } from './framework-list/framework-list.component';
import { FrameworksRoutingModule } from './frameworks-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FrameworksRoutingModule
  ],
  declarations: [FrameworkListComponent]
})
export class FrameworksModule { }
