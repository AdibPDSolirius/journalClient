import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { DynamicListComponent } from './dynamic-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
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
