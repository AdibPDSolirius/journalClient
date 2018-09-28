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


  constructor(private http: HttpClient) { }

  getResources(): Observable<any> {
    return this.http.get('http://localhost:8080/resources');
  }

  getResource(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/resources/' + id);
  }

  addResource(resource: Resource): Observable<Resource> {
    return this.http.post<Resource>('http://localhost:8080/resources', resource, httpOptions);
  }

  updateResource(id: number, resource: Resource): Observable<Resource> {
    return this.http.put<Resource>('http://localhost:8080/resources/' + id, resource, httpOptions);
  }

  deleteResource(id: number): Observable<any> {
    return this.http.delete('http://localhost:8080/resources/' + id);
  }

  filterResourcesByLanguageId(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/resources/' + 'language/' + id);
  }

  filterResourcesByLibraryId(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/resources/' + 'library/' + id);
  }

  filterResourcesByDatabaseId(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/resources/' + 'database/' + id);
  }

  filterResourcesByFrameworkId(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/resources/' + 'framework/' + id);
  }
}
