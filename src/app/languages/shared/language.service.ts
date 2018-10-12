import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Language } from './language';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  baseURL = 'https://damp-reaches-85572.herokuapp.com/api/languages/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Language[]> {
    return this.http.get<Language[]>(this.baseURL);
  }

  get(id: number): Observable<Language> {
    return this.http.get<Language>(this.baseURL + id);
  }

  add(language: Language): Observable<Language> {
    return this.http.post<Language>(this.baseURL, language, httpOptions);
  }

  update(id: number, language: Language): Observable<Language> {
    return this.http.put<Language>(this.baseURL + id, language, httpOptions);
  }

  delete(id: number): Observable<Language> {
    return this.http.delete<Language>(this.baseURL + id);
  }
}
