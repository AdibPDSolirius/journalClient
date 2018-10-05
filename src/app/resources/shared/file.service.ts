import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FileService {

  baseURL = 'http://localhost:8080/file/';

  constructor(private http: HttpClient) {}


  getFile(name: String): Observable<Blob> {
    return this.http.get(this.baseURL + name, { responseType: 'blob' });
  }

}
