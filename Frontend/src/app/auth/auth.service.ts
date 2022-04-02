import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'localhost:8000/api/login';

  constructor(private http: HttpClient) {}

  login(user) {
    return this.http.post<any>(this.loginUrl, user);
  }
}
