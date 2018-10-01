import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-language-form',
  templateUrl: './language-form.component.html',
  styleUrls: ['./language-form.component.css']
})
export class LanguageFormComponent implements OnInit {


  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }

  getLanguageService(): LanguageService {
    return this.languageService;
  }

}
