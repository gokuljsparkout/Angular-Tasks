import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logstatusChanged = new Subject();
  private registeredUsers: string[] = []; // Array to store registered users

  constructor(private apiService: ApiService, private toastr: ToastrService) {
    const token = localStorage.getItem('profanis_auth');

    // Load registered users from local storage
    const registeredUsersJson = localStorage.getItem('registeredUsers');
    if (registeredUsersJson) {
      this.registeredUsers = JSON.parse(registeredUsersJson);
    }
  }

  login(username: string, password: string) {
    return this.apiService.login(username, password).pipe(
      tap((response: any) => {
        console.log(response);
        if (response !== 'User is not registered') {
          localStorage.setItem(username, response.token);
          localStorage.setItem('loggedin', 'true');
        }
      })
    );
  }

  // register(username: string, password: string) {
  //   if (this.registeredUsers.includes(username)) {
  //     alert('User is already registered.');
  //     return;
  //   }

  //   this.registeredUsers.push(username);
  //   localStorage.setItem(
  //     'registeredUsers',
  //     JSON.stringify(this.registeredUsers)
  //   );

  //   return of(null); // Return an observable with a null value
  // }

  register(username: string, password: string): Observable<boolean> {
    if (this.registeredUsers.includes(username)) {
      return of(false);
    } else {
      this.registeredUsers.push(username);
      localStorage.setItem(
        'registeredUsers',
        JSON.stringify(this.registeredUsers)
      );
      return of(true);
    }
  }

  isAuthenticated(): Promise<boolean> {
    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        const isLoggedIn = localStorage.getItem('loggedin');
        resolve(isLoggedIn === 'true');
      });
    });
    return promise;
  }
}
