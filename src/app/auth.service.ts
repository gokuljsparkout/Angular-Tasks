import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
  private apiUrl = 'http://localhost:4200';
  private isLoggedin = false;

  constructor(private http: HttpClient) {}
  getIsLoggedin() {
    return this.isLoggedin;
  }
  login(username: string, password: string): Promise<void> {
    return this.http
      .post<any>(`${this.apiUrl}/login`, { username, password })
      .toPromise()
      .then((response) => {
        this.isLoggedin = true;
      })
      .catch((error) => {
        throw error;
      });
  }
  logout(): Promise<void> {
    return this.http
      .post<any>(`${this.apiUrl}/login`, {})
      .toPromise()
      .then((response) => {
        this.isLoggedin = false;
      })
      .catch((error) => {
        throw error;
      });
  }

  isAuthenticated(): Promise<boolean> {
    return this.http
      .get<boolean>(`${this.apiUrl}/check-auth`)
      .toPromise()
      .then((response: any) => {
        return response.authenticated;
      })
      .catch((error) => {
        throw error;
      });
  }
}
