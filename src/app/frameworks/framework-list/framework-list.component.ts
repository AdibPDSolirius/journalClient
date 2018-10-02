import { Component, OnInit } from '@angular/core';

import { Framework } from '../shared/framework';
import { FrameworkService } from '../shared/framework.service';

@Component({
  selector: 'app-framework-list',
  templateUrl: './framework-list.component.html',
  styleUrls: ['./framework-list.component.css']
})
export class FrameworkListComponent implements OnInit {

  frameworks: Framework[];

  constructor(private frameworkService: FrameworkService) { }

  ngOnInit() {
    this.frameworkService.getAll().subscribe(frameworks => {
      this.frameworks = frameworks;
    });
  }

  deleteFrameworkByIndex(index: number): void {
    if (index > -1) {
      this.frameworkService.delete(this.frameworks[index].id).subscribe();
      this.frameworks.splice(index, 1);
    }
  }

}
