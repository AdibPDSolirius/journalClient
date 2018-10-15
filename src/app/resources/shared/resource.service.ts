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
  // baseURL = 'https://damp-reaches-85572.herokuapp.com/api/resources/';
    baseURL = 'http://localhost:8080/api/resources/';

  constructor(private http: HttpClient) { }

  getResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.baseURL);
  }

  getResource(id: number): Observable<Resource> {
    return this.http.get<Resource>(this.baseURL + id);
  }

  addResource(resource: Resource): Observable<Resource> {
    return this.http.post<Resource>(this.baseURL, resource, httpOptions);
  }

  updateResource(id: number, resource: Resource): Observable<Resource> {
    return this.http.put<Resource>(this.baseURL + id, resource, httpOptions);
  }

  deleteResource(id: number): Observable<Resource> {
    return this.http.delete<Resource>(this.baseURL + id);
  }

  filterResourcesByLanguageId(id: number): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.baseURL + 'language/' + id);
  }

  filterResourcesByLibraryId(id: number): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.baseURL + 'library/' + id);
  }

  filterResourcesByDatabaseId(id: number): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.baseURL + 'database/' + id);
  }

  filterResourcesByFrameworkId(id: number): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.baseURL + 'framework/' + id);
  }
}
