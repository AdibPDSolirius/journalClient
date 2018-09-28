import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { LanguageListComponent } from './language-list/language-list.component';
import { LanguageFormComponent } from './language-form/language-form.component';
import { LanguageRoutingModule } from './language-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LanguageRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  declarations: [
    LanguageListComponent,
    LanguageFormComponent,
  ]
})
export class LanguagesModule { }
