import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { Injectable } from '@angular/core';
@Injectable()
export class ApiService {
  private apiUrl = `${environment.apiBaseUrl}`;
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.apiUrl}/list-event`);
  }

  registerUser(data: any) {
    return this.http.post(`${this.apiUrl}/signup`, data);
  }

  loginService(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`,{email : email,password : password})
  }
}
