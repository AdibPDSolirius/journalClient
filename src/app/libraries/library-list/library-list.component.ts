import { Component, OnInit } from '@angular/core';

import { Library } from '../shared/library';
import { LibraryService } from '../shared/library.service';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent implements OnInit {

  libraries: Library[];

  constructor(private librarySercie: LibraryService) { }

  ngOnInit() {
    this.librarySercie.getAll().subscribe(libraries => {
      this.libraries = libraries;
    });
  }

  deleteLibraryByIndex(index: number): void {
    if (index > -1) {
      this.librarySercie.delete(this.libraries[index].id).subscribe();
      this.libraries.splice(index, 1);
    }
  }

}
