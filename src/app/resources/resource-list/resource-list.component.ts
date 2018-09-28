import { Component, OnInit } from '@angular/core';

import { Resource } from '../shared/resource';
import { ResourceService} from '../shared/resource.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css'],
})
export class ResourceListComponent implements OnInit {

  resources: Resource[];

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.resourceService.getResources().subscribe(resources =>
      this.resources = resources
    );
  }

  deleteResource(id: number): void {
    this.resourceService.deleteResource(id).subscribe();
  }

}
