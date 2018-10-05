import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Resource } from './resource';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  baseURL = 'https://damp-reaches-85572.herokuapp.com/api/resources/';

  constructor(private http: HttpClient) { }

  getResources(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  getResource(id: number): Observable<any> {
    return this.http.get(this.baseURL + id);
  }

  addResource(resource: Resource): Observable<Resource> {
    return this.http.post<Resource>(this.baseURL, resource, httpOptions);
  }

  updateResource(id: number, resource: Resource): Observable<Resource> {
    return this.http.put<Resource>(this.baseURL + id, resource, httpOptions);
  }

  deleteResource(id: number): Observable<any> {
    return this.http.delete(this.baseURL + id);
  }

  filterResourcesByLanguageId(id: number): Observable<any> {
    return this.http.get(this.baseURL + 'language/' + id);
  }

  filterResourcesByLibraryId(id: number): Observable<any> {
    return this.http.get(this.baseURL + 'library/' + id);
  }

  filterResourcesByDatabaseId(id: number): Observable<any> {
    return this.http.get(this.baseURL + 'database/' + id);
  }

  filterResourcesByFrameworkId(id: number): Observable<any> {
    return this.http.get(this.baseURL + 'framework/' + id);
  }
}
