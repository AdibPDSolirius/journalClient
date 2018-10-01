import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormGroup, FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';

import {Language} from '../../languages/shared/language';
import { LanguageService } from '../../languages/shared/language.service';
import { Resource } from '../shared/resource';
import { ResourceService} from '../shared/resource.service';

@Component({
  selector: 'app-resources-form',
  templateUrl: './resources-form.component.html',
  styleUrls: ['./resources-form.component.css']
})
export class ResourcesFormComponent implements OnInit {

  resourceForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    url: new FormControl(''),
    languages: new FormArray([])
  });
  languages: Language[];
  isUpdate: boolean;

  constructor(private route: ActivatedRoute,
              private languageService: LanguageService,
              private resourceService: ResourceService
  ) {}

  ngOnInit() {
    this.determineIsUpdate();
    if (this.isUpdate) {
      this.populateResourceFields();
    }
    this.populateLanguageFields();

  }

  onSubmit() {
    if (this.isUpdate) {
      this.resourceService.updateResource(this.resourceForm.get('id').value, this.resourceForm.getRawValue()).subscribe()
    } else {
      this.resourceService.addResource(this.resourceForm.getRawValue()).subscribe();
    }
  }

  determineIsUpdate() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isUpdate = true;
    } else {
      this.isUpdate = false;
    }
  }
  deleteLanguageByIndex(index: number) {
    this.getLanguages().removeAt(index);
  }

  getLanguages() {
    return this.resourceForm.get('languages') as FormArray;
  }

  addLanguageByIndex(index: number) {
    this.getLanguages().push(new FormGroup({
      id: new FormControl(this.languages[index].id),
      name: new FormControl(this.languages[index].name)
    }));
  }

  addLanguage(language: Language) {
    this.getLanguages().push(new FormGroup({
      id: new FormControl(language.id),
      name: new FormControl(language.name)
    }));
  }

   populateResourceFields() {
     const id = this.route.snapshot.paramMap.get('id');
     this.resourceService.getResource(+id).subscribe(resource => {
       this.resourceForm.patchValue({
         id: resource.id,
         name: resource.name,
         url: resource.url,
       });
       for (const language of resource.languages) {
         this.addLanguage(language);
       }
     });
   }

   populateLanguageFields() {
     this.languageService.getLanguages().subscribe(languages => {
       this.languages = languages;
     });
   }

}
