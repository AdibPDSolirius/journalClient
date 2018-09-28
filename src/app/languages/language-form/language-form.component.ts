import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Language } from '../shared/language';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-language-form',
  templateUrl: './language-form.component.html',
  styleUrls: ['./language-form.component.css']
})
export class LanguageFormComponent implements OnInit {

  private language: Language;
  name = new FormControl('');

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }

  onEnter(name: String) {
    this.language = {
      name: name,
    };
    this.languageService.addLanguage(this.language).subscribe(language =>
      console.log(language)
    );
  }

}
