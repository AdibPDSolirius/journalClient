import { Component, OnInit } from '@angular/core';

import { Database } from '../shared/database';
import { DatabaseService } from '../shared/database.service';

@Component({
  selector: 'app-database-list',
  templateUrl: './database-list.component.html',
  styleUrls: ['./database-list.component.css']
})
export class DatabaseListComponent implements OnInit {

  databases: Database[];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.databaseService.getAll().subscribe(databases => {
      this.databases = databases;
    });
  }

  deleteDatabaseByIndex(index: number): void {
    if (index > -1) {
      this.databaseService.delete(this.databases[index].id).subscribe();
      this.databases.splice(index, 1);
    }
  }

}
