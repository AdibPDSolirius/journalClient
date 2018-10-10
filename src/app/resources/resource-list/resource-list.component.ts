import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { Resource } from '../shared/resource';
import { ResourceService} from '../shared/resource.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css'],
})
export class ResourceListComponent implements OnInit {

  resources: MatTableDataSource<Resource>;
  displayedColumns = ['Name', 'URL', 'Databases', 'Frameworks', 'Languages', 'Libraries', 'Actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private route: ActivatedRoute,
              private resourceService: ResourceService) { }

  ngOnInit() {
    this.populateResources();
  }

  populateResources(): void {
    const urlSegments = this.route.snapshot.url;
    const filterSegment = urlSegments[1];
    if (!filterSegment) {
      this.populateWithAllResources();
      return;
    }

    const filterId = +urlSegments[2].path;
    switch (filterSegment.path) {
      case 'database': {
        this.populateResourcesByDatabaseId(filterId);
        break;
      }
      case 'framework': {
        this.populateResourcesByFrameworkId(filterId);
        break;
      }
      case 'language': {
        this.populateResourcesByLanguageId(filterId);
        break;
      }
      case 'library': {
        this.populateResourcesByLibraryId(filterId);
        break;
      }
    }
  }

  populateWithAllResources(): void {
    this.resourceService.getResources().subscribe(resources => {
      this.reset(resources);
    });
  }

  populateResourcesByDatabaseId(id: number){
    this.resourceService.filterResourcesByDatabaseId(id).subscribe(resources => {
      this.reset(resources);
    });
  }

  populateResourcesByFrameworkId(id: number){
    this.resourceService.filterResourcesByFrameworkId(id).subscribe(resources => {
      this.reset(resources);
    });
  }

  populateResourcesByLanguageId(id: number){
    this.resourceService.filterResourcesByLanguageId(id).subscribe(resources => {
      this.reset(resources);
    });
  }

  populateResourcesByLibraryId(id: number){
    this.resourceService.filterResourcesByLibraryId(id).subscribe(resources => {
      this.reset(resources);
    });
  }


  deleteResourceByIndex(index: number): void {
    if (index > -1) {
      this.resourceService.deleteResource(this.resources.data[index].id).subscribe();
      this.resources.data.splice(index, 1);
      this.resources.paginator = this.paginator;
      this.resources.sort = this.sort
    }
  }

  applyFilter(filterValue: string) {
    this.resources.filter = filterValue.trim().toLowerCase();

    if (this.resources.paginator) {
      this.resources.paginator.firstPage();
    }
  }

  reset(resources: Resource[]): void {
    if (!resources) {
      return;
    }
    this.resources = new MatTableDataSource<Resource>(resources);
    setTimeout(() => this.resources.paginator = this.paginator);
    setTimeout(() => this.resources.sort = this.sort);
  }

}
