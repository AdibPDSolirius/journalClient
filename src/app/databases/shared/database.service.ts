import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import { Database } from './database';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  baseURL = 'https://damp-reaches-85572.herokuapp.com/api/databases/';
  // baseURL = 'http://localhost:8080/api/databases/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Database[]> {
    return this.http.get<Database[]>(this.baseURL);
  }

  get(id: number): Observable<Database> {
    return this.http.get<Database>(this.baseURL + id);
  }

  add(database: Database): Observable<Database> {
    return this.http.post<Database>(this.baseURL, database, httpOptions);
  }

  update(id: number, database: Database): Observable<Database> {
    return this.http.put<Database>(this.baseURL + id, database, httpOptions);
  }

  delete(id: number): Observable<Database> {
    return this.http.delete<Database>(this.baseURL + id);
  }
}
