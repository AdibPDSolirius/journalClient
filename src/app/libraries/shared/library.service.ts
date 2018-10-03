import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Library } from './library';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  baseURL = 'http://localhost:8080/libraries/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  get(id: number): Observable<any> {
    return this.http.get(this.baseURL + id);
  }

  add(library: Library): Observable<Library> {
    return this.http.post<Library>(this.baseURL, library, httpOptions);
  }

  update(id: number, library: Library): Observable<Library> {
    return this.http.put<Library>(this.baseURL + id, library, httpOptions);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.baseURL + id);
  }
}
