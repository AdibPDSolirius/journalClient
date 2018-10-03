import { Component, OnInit } from '@angular/core';

import { Library } from '../shared/library';
import { LibraryService } from '../shared/library.service';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent implements OnInit {

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
  }

  getLibraryService(): LibraryService {
    return this.libraryService;
  }

}
