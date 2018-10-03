import { Component, OnInit } from '@angular/core';

import { Language } from '../shared/language';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent implements OnInit {

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }

  getLanguageService(): LanguageService {
    return this.languageService;
  }

}
