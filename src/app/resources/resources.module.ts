import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { ResourcesFormComponent } from './resources-form/resources-form.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourceRoutingModule } from './resource-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    ResourceRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [
    ResourcesFormComponent,
    ResourceListComponent
  ]
})
export class ResourcesModule { }
