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

  baseURL = 'https://damp-reaches-85572.herokuapp.com/api/libraries/';
  // baseURL = 'http://localhost:8080/api/libraries/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Library[]> {
    return this.http.get<Library[]>(this.baseURL);
  }

  get(id: number): Observable<Library> {
    return this.http.get<Library>(this.baseURL + id);
  }

  add(library: Library): Observable<Library> {
    return this.http.post<Library>(this.baseURL, library, httpOptions);
  }

  update(id: number, library: Library): Observable<Library> {
    return this.http.put<Library>(this.baseURL + id, library, httpOptions);
  }

  delete(id: number): Observable<Library> {
    return this.http.delete<Library>(this.baseURL + id);
  }
}
