import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.css']
})
export class DynamicListComponent implements OnInit {
  @Input()
    service: any;
  @Input()
    routerLinkUpdate: String;
  @Input()
    routerLinkCreate: String;

  data: any[];

  constructor() { }

  ngOnInit() {
    this.service.getAll().subscribe(data => {
      this.data = data;
    });
  }

  deleteSingleDataByIndex(index: number): void {
    if (index > -1) {
      this.service.delete(this.data[index].id).subscribe();
      this.service.splice(index, 1);
    }
  }

}
