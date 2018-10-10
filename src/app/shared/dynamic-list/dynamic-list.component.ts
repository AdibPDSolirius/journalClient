import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.css']
})
export class DynamicListComponent implements OnInit {
  @Input()
    service: any;
  @Input()
    name: String;

  tableData: MatTableDataSource<any>;
  displayedColumns = ['Name', 'Actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.service.getAll().subscribe(data => {
      this.reset(data);
    });
  }

  deleteSingleDataByIndex(index: number): void {
    if (index > -1) {
      this.service.delete(this.tableData.data[index].id).subscribe();
      this.tableData.data.splice(index, 1);
      this.tableData.paginator = this.paginator;
      this.tableData.sort = this.sort;
    }
  }

  applyFilter(filterValue: string) {
    this.tableData.filter = filterValue.trim().toLowerCase();

    if (this.tableData.paginator) {
      this.tableData.paginator.firstPage();
    }
  }

  reset(data: any[]): void {
    if (!data) {
      return;
    }
    this.tableData = new MatTableDataSource(data);
    setTimeout(() => this.tableData.paginator = this.paginator);
    setTimeout(() => this.tableData.sort = this.sort);
  }

}
