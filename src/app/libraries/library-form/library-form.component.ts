import { Component, OnInit } from '@angular/core';

import {LibraryService} from '../shared/library.service';

@Component({
  selector: 'app-library-form',
  templateUrl: './library-form.component.html',
  styleUrls: ['./library-form.component.css']
})
export class LibraryFormComponent implements OnInit {

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
  }

  getLibraryService(): LibraryService {
    return this.libraryService;
  }

}
