import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterData } from '../interfaces/register-data';
import { LoginData } from '../interfaces/login-data';
import { Vehicle } from '../interfaces/vehicle';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL: String = 'http://localhost:8080/api'

  constructor(
    private http: HttpClient
  ) { }

  register(data: RegisterData) {
    return this.http.post(`${this.URL}/auth/register`, data);
  }

  login(data: LoginData) {
    return this.http.post(`${this.URL}/auth/login`, data);
  }

  getAllVehicles() {
    return this.http.get(`${this.URL}/vehicle`);
  }

  getSingleVehicle(id: Number) {
    return this.http.get(`${this.URL}/vehicle/${id}`);
  }

  addVehicle(vehicle: Vehicle) {
    this.http.post(`${this.URL}/vehicle`, vehicle, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    }).subscribe((value: any) => {
      console.log("Value:", value);
      alert('Auto Aggiunta correttamente!');
    });
  }

  deleteVehicle(id: Number) {

    return this.http.delete(`${this.URL}/vehicle/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    })
  }

}
