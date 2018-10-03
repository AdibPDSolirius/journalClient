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
  }

  getFrameworkService(): FrameworkService {
    return this.frameworkService;
  }

}
