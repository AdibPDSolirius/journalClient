import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabaseFormComponent } from './database-form/database-form.component';
import { DatabaseListComponent } from './database-list/database-list.component';
import { DatabasesRoutingModule} from './databases-routing.module';
import { DynamicFormModule } from '../shared/dynamic-form.module';

@NgModule({
  imports: [
    CommonModule,
    DatabasesRoutingModule,
    DynamicFormModule
  ],
  declarations: [
    DatabaseFormComponent,
    DatabaseListComponent
  ]
})
export class DatabasesModule { }
