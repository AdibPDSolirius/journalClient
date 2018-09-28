import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  constructor(private http: HttpClient) { }

  getLanguages(): Observable<any> {
    return this.http.get('http://localhost:8080/languages');
  }

  getLanguage(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/languages/' + id);
  }

  addLanguage(language: Language): Observable<Language> {
    return this.http.post<Language>('http://localhost:8080/languages', language, httpOptions);
  }

  updateLanguage(id: number, language: Language): Observable<Language> {
    return this.http.put<Language>('http://localhost:8080/languages/' + id, language, httpOptions);
  }

  deleteLanguage(id: number): Observable<any> {
    return this.http.delete('http://localhost:8080/languages/' + id);
  }
}
