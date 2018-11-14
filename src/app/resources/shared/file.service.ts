import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FileService {

  baseURL = 'https://damp-reaches-85572.herokuapp.com/api/files/';
  // baseURL = 'http://localhost:8080/api/files/';

  constructor(private http: HttpClient) {}


  getFile(name: String): Observable<Blob> {
    return this.http.get(this.baseURL + name, { responseType: 'blob' });
  }

  deleteFile(name: String):  Observable<any> {
    return this.http.delete(this.baseURL + name);
  }

}
