import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFormModule } from '../shared/dynamic-form.module';
import { LanguageListComponent } from './language-list/language-list.component';
import { LanguageFormComponent } from './language-form/language-form.component';
import { LanguagesRoutingModule } from './languages-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LanguagesRoutingModule,
    DynamicFormModule,
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
