import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

import { Language } from '../shared/language';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-language-form',
  templateUrl: './language-form.component.html',
  styleUrls: ['./language-form.component.css']
})
export class LanguageFormComponent implements OnInit {

  languageForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required)
  });
  isUpdate: boolean;

  constructor(private route: ActivatedRoute,
              private languageService: LanguageService) { }

  ngOnInit() {
    this.determineIsUpdate();
    if (this.isUpdate) {
      this.populateLanguageFields();
    }
  }

  onSubmit() {
    if (this.isUpdate) {
      this.languageService.updateLanguage(this.languageForm.get('id').value, this.languageForm.getRawValue()).subscribe();
    } else {
      this.languageService.addLanguage(this.languageForm.getRawValue()).subscribe();
    }
    // this.language = {
    //   name: name,
    // };
    // // this.languageService.addLanguage(this.language).subscribe(language =>
    // //   console.log(language)
    // // );
  }

  determineIsUpdate() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isUpdate = true;
    } else {
      this.isUpdate = false;
    }
  }

  populateLanguageFields() {
    const id = this.route.snapshot.paramMap.get('id');
    this.languageService.getLanguage(+id).subscribe(language => {
      this.languageForm.patchValue({
        id: language.id,
        name: language.name
      })
    });
  }

}
