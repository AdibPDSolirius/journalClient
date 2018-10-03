import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators  } from '@angular/forms';
import { Location } from '@angular/common';

import {Language} from '../../languages/shared/language';
import { LanguageService } from '../../languages/shared/language.service';
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
              private location: Location,
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
      this.resourceService.updateResource(this.resourceForm.get('id').value, this.resourceForm.getRawValue()).subscribe(resource => {
        this.goBack();
      });
    } else {
      this.resourceService.addResource(this.resourceForm.getRawValue()).subscribe(resource => {
        this.goBack();
      });
    }
  }

  goBack(): void {
    this.location.back();
  }

  determineIsUpdate(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isUpdate = true;
    } else {
      this.isUpdate = false;
    }
  }
  deleteLanguageByIndex(index: number): void {
    this.getLanguages().removeAt(index);
  }

  getLanguages(): FormArray {
    return this.resourceForm.get('languages') as FormArray;
  }

  addLanguageByIndex(index: number): void {
    this.getLanguages().push(new FormGroup({
      id: new FormControl(this.languages[index].id),
      name: new FormControl(this.languages[index].name)
    }));
  }

  addLanguage(language: Language): void {
    this.getLanguages().push(new FormGroup({
      id: new FormControl(language.id),
      name: new FormControl(language.name)
    }));
  }

   populateResourceFields(): void {
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

   populateLanguageFields(): void {
     this.languageService.getAll().subscribe(languages => {
       this.languages = languages;
     });
   }

}
