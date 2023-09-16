import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterData } from '../interfaces/register-data';
import { LoginData } from '../interfaces/login-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  register(data: RegisterData) {
    return this.http.post("http://localhost:8080/api/auth/register", data);
  }

  login(data: LoginData) {
    return this.http.post("http://localhost:8080/api/auth/login", data)
  }

}
