import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API_URL = 'http://localhost:8080/api/auth/';
const headers = { headers: new HttpHeaders({'Content-type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API_URL + 'signin', {username, password}, headers);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API_URL + 'signup', {username, email, password}, headers);
  }
}
