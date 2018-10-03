import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { DynamicListComponent } from './dynamic-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    RouterModule
  ],
  declarations: [
    DynamicListComponent
  ],
  exports: [
    DynamicListComponent
  ]
})
export class DynamicListModule { }
