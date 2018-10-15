import {getTestBed, TestBed} from '@angular/core/testing';

import { DatabaseService } from './database.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Database} from './database';
import {Data} from '@angular/router';

fdescribe('DatabaseService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: DatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DatabaseService
      ]
    });
    injector = getTestBed();
    service = injector.get(DatabaseService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getAll', () => {
    it('should return an observable<Database[]>', () => {
      const dummyDBs = [
        {id: 1, name: 'db1'},
        {id: 2, name: 'db2'}
      ];

      service.getAll().subscribe(databases => {
        expect(databases.length).toBe(2);
        expect(databases).toEqual(dummyDBs);
      });

      const req = httpMock.expectOne(service.baseURL);
      expect(req.request.method).toBe('GET');
      req.flush(dummyDBs);

    });
  });

  describe('#get', () => {
    it('should return an observable<Database>', () => {
      const dummyDB = {
        id: 1, name: 'db'
      };

      service.get(1).subscribe(database => {
        expect(database.id).toBe(1);
        expect(database.name).toBe('db');
      });

      const req = httpMock.expectOne(service.baseURL + '1');
      expect(req.request.method).toBe('GET');
      req.flush(dummyDB);
    });
  });

  describe('#add', () => {
    it('should return observable<Database>', () => {
      const dummyDB: Database = {
        id: 1, name: 'db'
      };

      service.add(dummyDB).subscribe(database => {
        expect(database.id).toBe(1);
        expect(database.name).toBe('db');
      });

      const req = httpMock.expectOne(service.baseURL);
      expect(req.request.method).toBe('POST');
      req.flush(dummyDB);
    });
  });

  describe('#update', () => {
    it('should return observable<Database>', () => {
      const dummyDB: Database = {
        id: 1, name: 'db'
      };

      service.update(1, dummyDB).subscribe(database => {
        expect(database.id).toBe(1);
        expect(database.name).toBe('db');
      });

      const req = httpMock.expectOne(service.baseURL + '1');
      expect(req.request.method).toBe('PUT');
      req.flush(dummyDB);
    });
  });

  describe('#delete', () => {
    it('should return observable<Database>', () => {
      const dummyDB: Database = {
        id: 1, name: 'db'
      };

      service.delete(1).subscribe(database => {
        expect(database.id).toBe(1);
        expect(database.name).toBe('db');
      });

      const req = httpMock.expectOne(service.baseURL + '1');
      expect(req.request.method).toBe('DELETE');
      req.flush(dummyDB);
    });
  });
});

