import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Component, OnInit} from '@angular/core';

import { Resource } from '../shared/resource';
import { ResourceService } from '../shared/resource.service';


@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.css']
})
export class ResourceDetailComponent implements OnInit {

  private resource: Resource;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private resourceService: ResourceService
  ) {}

  ngOnInit() {
    this.getResource();
  }

  getResource(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.resourceService.getResource(id).subscribe(resource =>
      this.resource = resource
    );
  }

}
