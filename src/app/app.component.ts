import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Adibs Journal';
  links = [{
    name: 'Resources',
    path: '/resource'
  }];

  ngOnInit() {
    this.populateLinksField();
  }

  populateLinksField(): void {
    this.links = [{
      name: 'Resources',
      path: '/resource'
    }];
    this.links.push({
      name: 'Databases',
      path: '/database'
    });
    this.links.push({
      name: 'Frameworks',
      path: '/framework'
    });
    this.links.push({
      name: 'Languages',
      path: '/language'
    });
    this.links.push({
      name: 'Libraries',
      path: '/library'
    });
  }


}
