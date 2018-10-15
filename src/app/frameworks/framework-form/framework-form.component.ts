import { Component, OnInit } from '@angular/core';

import { FrameworkService } from '../shared/framework.service';

@Component({
  selector: 'app-framework-form',
  templateUrl: './framework-form.component.html',
  styleUrls: ['./framework-form.component.css']
})
export class FrameworkFormComponent implements OnInit {

  constructor(private frameworkService: FrameworkService) { }

  ngOnInit() {
  }

  getFrameworkService(): FrameworkService {
    return this.frameworkService;
  }

}
