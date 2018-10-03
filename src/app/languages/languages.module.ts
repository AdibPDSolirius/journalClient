import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { DynamicListModule } from '../shared/dynamic-list/dynamic-list.module';
import { LanguageListComponent } from './language-list/language-list.component';
import { LanguageFormComponent } from './language-form/language-form.component';
import { LanguagesRoutingModule } from './languages-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LanguagesRoutingModule,
    DynamicFormModule,
    DynamicListModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  declarations: [
    LanguageListComponent,
    LanguageFormComponent,
  ]
})
export class LanguagesModule { }
