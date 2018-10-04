import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators  } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Database } from '../../databases/shared/database';
import { DatabaseService } from '../../databases/shared/database.service';
import { Framework } from '../../frameworks/shared/framework';
import { FrameworkService } from '../../frameworks/shared/framework.service';
import { Language } from '../../languages/shared/language';
import { LanguageService } from '../../languages/shared/language.service';
import { ResourceService } from '../shared/resource.service';
import { Library } from '../../libraries/shared/library';
import { LibraryService } from '../../libraries/shared/library.service';
import { CustomValidators } from 'ngx-custom-validators';

@Component({
  selector: 'app-resources-form',
  templateUrl: './resources-form.component.html',
  styleUrls: ['./resources-form.component.css']
})
export class ResourcesFormComponent implements OnInit {

  resourceForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    url: new FormControl('', CustomValidators.url),
    memo: new FormControl(''),
    file: new FormControl(''),
    languages: new FormArray([]),
    libraries: new FormArray([]),
    databases: new FormArray([]),
    frameworks: new FormArray([])
  });
  languages: Language[];
  libraries: Library[];
  databases: Database[];
  frameworks: Framework[];

  isUpdate: boolean;

  afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg,.png',
    maxSize: '1',
    uploadAPI:  {
      url: 'http://localhost:8080/file/upload',
    },
    hideResetBtn: true,
  };

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private databaseService: DatabaseService,
              private frameworkService: FrameworkService,
              private languageService: LanguageService,
              private libraryService: LibraryService,
              private resourceService: ResourceService
  ) {}

  ngOnInit() {
    this.determineIsUpdate();
    if (this.isUpdate) {
      this.populateResourceFields();
    }
    this.populateDatabaseFields();
    this.populateFrameworkFields();
    this.populateLanguageFields();
    this.populateLibraryFields();

  }

  onSubmit() {
    if (this.isUpdate) {
      this.resourceService.updateResource(this.resourceForm.get('id').value, this.resourceForm.getRawValue()).subscribe(resource => {
        this.router.navigate(['/resource/resources']);
      });
    } else {
      this.resourceService.addResource(this.resourceForm.getRawValue()).subscribe(resource => {
        this.router.navigate(['/resource/resources']);
      });
    }
  }

  afterImageUpload($event): void {
    this.resourceForm.patchValue({
      file: $event.responseText
    });
  }

  determineIsUpdate(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isUpdate = true;
    } else {
      this.isUpdate = false;
    }
  }

  deleteDatabaseByIndex(index: number): void {
    this.getDatabases().removeAt(index);
  }deleteFrameworkByIndex(index: number): void {
    this.getFrameworks().removeAt(index);
  }
  deleteLanguageByIndex(index: number): void {
    this.getLanguages().removeAt(index);
  }
  deleteLibraryByIndex(index: number): void {
    this.getLibraries().removeAt(index);
  }


  getDatabases(): FormArray {
    return this.resourceForm.get('databases') as FormArray;
  }
  getFrameworks(): FormArray {
    return this.resourceForm.get('frameworks') as FormArray;
  }
  getLanguages(): FormArray {
    return this.resourceForm.get('languages') as FormArray;
  }
  getLibraries(): FormArray {
    return this.resourceForm.get('libraries') as FormArray;
  }

  addDatabaseByIndex(index: number): void {
    if (this.checkIfExistsInFormArray(this.getDatabases(), this.databases[index].id)) {
      return;
    }
    this.getDatabases().push(new FormGroup({
      id: new FormControl(this.databases[index].id),
      name: new FormControl(this.databases[index].name)
    }));
  }
  addFrameworkByIndex(index: number): void {
    if (this.checkIfExistsInFormArray(this.getFrameworks(), this.frameworks[index].id)) {
      return;
    }
    this.getFrameworks().push(new FormGroup({
      id: new FormControl(this.frameworks[index].id),
      name: new FormControl(this.frameworks[index].name)
    }));
  }
  addLanguageByIndex(index: number): void {
    if (this.checkIfExistsInFormArray(this.getLanguages(), this.languages[index].id)) {
      return;
    }
    this.getLanguages().push(new FormGroup({
      id: new FormControl(this.languages[index].id),
      name: new FormControl(this.languages[index].name)
    }));
  }

  addLibraryByIndex(index: number): void {
    if (this.checkIfExistsInFormArray(this.getLibraries(), this.libraries[index].id)) {
      return;
    }

    this.getLibraries().push(new FormGroup({
      id: new FormControl(this.libraries[index].id),
      name: new FormControl(this.libraries[index].name)
    }));
  }

  checkIfExistsInFormArray(formArray: FormArray, id: number): boolean {
    for (let i = 0; i < formArray.length; i++) {
      const curControl = formArray.controls[i];
      if (curControl.value.id === id) {
        return true;
      }
    }
    return false;
  }

  addDatabase(database: Database): void {
    this.getDatabases().push(new FormGroup({
      id: new FormControl(database.id),
      name: new FormControl(database.name)
    }));
  }
  addFramework(framework: Framework): void {
    this.getFrameworks().push(new FormGroup({
      id: new FormControl(framework.id),
      name: new FormControl(framework.name)
    }));
  }
  addLanguage(language: Language): void {
    this.getLanguages().push(new FormGroup({
      id: new FormControl(language.id),
      name: new FormControl(language.name)
    }));
  }
  addLibrary(library: Library): void {
    this.getLibraries().push(new FormGroup({
      id: new FormControl(library.id),
      name: new FormControl(library.name)
    }));
  }

   populateResourceFields(): void {
     const id = this.route.snapshot.paramMap.get('id');
     this.resourceService.getResource(+id).subscribe(resource => {
       this.resourceForm.patchValue({
         id: resource.id,
         name: resource.name,
         url: resource.url,
         memo: resource.memo,
         file: resource.file
       });
       for (const database of resource.databases) {
         this.addDatabase(database);
       }
       for (const framework of resource.frameworks) {
         this.addFramework(framework)
       }
         for (const language of resource.languages) {
         this.addLanguage(language);
       }
       for (const library of resource.libraries) {
         this.addLibrary(library);
       }
     });
   }

  populateDatabaseFields(): void {
    this.databaseService.getAll().subscribe(databases => {
      this.databases = databases;
    });
  }
  populateFrameworkFields(): void {
    this.frameworkService.getAll().subscribe(frameworks => {
      this.frameworks = frameworks;
    });
  }
   populateLanguageFields(): void {
     this.languageService.getAll().subscribe(languages => {
       this.languages = languages;
     });
   }
  populateLibraryFields(): void {
    this.libraryService.getAll().subscribe(libraries => {
      this.libraries = libraries;
    });
  }


}
