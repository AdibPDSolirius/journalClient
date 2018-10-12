import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicListComponent } from './dynamic-list.component';
import {DatabaseService} from '../../databases/shared/database.service';
import {Observable, of} from 'rxjs';
import {Database} from '../../databases/shared/database';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

fdescribe('DynamicListComponent', () => {
  let component: DynamicListComponent;
  let fixture: ComponentFixture<DynamicListComponent>;

  class MockDatabaseService {
    delete(): Observable<Database> {
      return new Observable();
    }
    getAll(): Observable<Database[]> {
      const dummyDB: Database[] = [
        {id: 1, name: 'db1'},
        {id: 2, name: 'db2'}
      ];
      return of(dummyDB);
    }
  }



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatTableModule,
        BrowserAnimationsModule,
      ],
      declarations: [ DynamicListComponent ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicListComponent);
    component = fixture.componentInstance;
    component.name = 'database';
    component.service = new MockDatabaseService();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('load data after Angular calls ngOnInit', () => {
    component.ngOnInit();
    expect(component.tableData.data.length).toBe(2);
    component.deleteSingleDataByIndex(0);
  });

  it('data deleted from table data after Angular calls deleteSingleDataByIndex', () => {
    component.deleteSingleDataByIndex(0);
    expect(component.tableData.data.length).toBe(1);
    expect(component.tableData.data[0].id).toBe(2);
    expect(component.tableData.data[0].name).toBe('db2');
  });

  it('should contain "Add Database" button', () => {
      const natElement: HTMLElement = fixture.nativeElement;
      const button = natElement.querySelector('button');
      expect(button.textContent).toEqual('Add Database');
  });

});
