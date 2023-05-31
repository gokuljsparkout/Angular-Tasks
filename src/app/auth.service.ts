import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable()
export class AuthService {
  private apiUrl = 'http://localhost:4200';
  private isLoggedin = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  getIsLoggedin() {
    return this.isLoggedin;
  }
  login() {
    this.isLoggedin = true;
    if (this.router.url === '/login') {
      this.router.navigate(['/protected']);
    }
    return this.isLoggedin;
  }
  logout() {
    this.isLoggedin = false;
    if (this.router.url === '/protected') {
      this.router.navigate(['/']);
    }
    return this.isLoggedin;
  }

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedin);
      }, 500);
    });
    return promise;
  }
}
