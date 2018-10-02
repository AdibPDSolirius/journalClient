import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabaseListComponent } from './database-list/database-list.component';
import { DatabasesRoutingModule } from './databases-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DatabasesRoutingModule
  ],
  declarations: [
    DatabaseListComponent
  ]
})
export class DatabasesModule { }
