import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Framework } from './framework';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FrameworkService {

  baseURL = 'https://damp-reaches-85572.herokuapp.com/api/frameworks/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  get(id: number): Observable<any> {
    return this.http.get(this.baseURL + id);
  }

  add(framework: Framework): Observable<Framework> {
    return this.http.post<Framework>(this.baseURL, framework, httpOptions);
  }

  update(id: number, framework: Framework): Observable<Framework> {
    return this.http.put<Framework>(this.baseURL + id, framework, httpOptions);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.baseURL + id);
  }
}
