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

  constructor(private route: ActivatedRoute,
              private languageService: LanguageService,
              private resourceService: ResourceService
  ) {}

  ngOnInit() {
    this.populateResourceFields();
    this.populateLanguageFields();

  }

  onSubmit() {
    console.log(this.resourceForm.getRawValue());
  }


   // onEnter() {
   //  if (this.resource.name === '') {
   //    this.isValid = false;
   //  } else {
   //    this.isValid = true;
   //    if (this.isUpdate) {
   //      this.resourceService.updateResource(+this.route.snapshot.paramMap.get('id'), this.resource).subscribe(resource =>
   //      console.log(resource)
   //      );
   //    } else {
   //      this.resource.languages = this.selectedLanguages;
   //      console.log(this.resource);
   //      // this.resourceService.addResource(this.resource).subscribe(resource =>
   //      //   console.log(resource)
   //      // );
   //    }
   //  }
   // }

  getLanguages() {
    return this.resourceForm.get('languages') as FormArray;
  }

  addLanguage(index: String) {
    this.getLanguages().push(new FormGroup({
      id: new FormControl(this.languages[+index].id),
      name: new FormControl(this.languages[+index].name)
    }));
    console.log(this.languages[index]);
    // this.getLanguages().push(new FormGroup({
    //   id: new FormControl(value)
    // }));
  }

   populateResourceFields() {
     const id = this.route.snapshot.paramMap.get('id');
     if (id) {
       this.resourceService.getResource(+id).subscribe(resource => {
         this.resourceForm.patchValue({
           id: resource.id,
           name: resource.name,
           url: resource.url,
           languages: resource.languages
         });
       });
     }
   }

   populateLanguageFields() {
     this.languageService.getLanguages().subscribe(languages => {
       this.languages = languages;
     });
   }

   languageToString(language: Language): String {
      return language.name;
   }


}
