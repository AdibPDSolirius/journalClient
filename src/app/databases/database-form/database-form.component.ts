import { Component, OnInit } from '@angular/core';

import { DatabaseService } from '../shared/database.service';

@Component({
  selector: 'app-database-form',
  templateUrl: './database-form.component.html',
  styleUrls: ['./database-form.component.css']
})
export class DatabaseFormComponent implements OnInit {

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
  }

  getDatabaseService(): DatabaseService {
    return this.databaseService;
  }

}
