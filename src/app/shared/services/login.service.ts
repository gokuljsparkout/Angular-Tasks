import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { CommonService } from './common.service';

@Injectable()
export class LoginService {
  constructor(
    private apiService: ApiService,
    private toastr: ToastrService,
    private router: Router,
    private commonService: CommonService
  ) {}

  loginUser(email: string, password: string) {
    return this.apiService
      .loginUser({ email: email, password: password })
      .pipe(
        catchError((error) => {
          this.toastr.error(error.error.message);
          return throwError(error);
        })
      )
      .subscribe((response: any) => {
        this.toastr.success(response.message);
        localStorage.setItem('user_id', response.data.session.user_id);
        localStorage.setItem('token', response.data.session.session_token);
        localStorage.setItem('isLoggedin', 'true');
        this.commonService.loginStatusChanged.next(null);
        setTimeout(() => {
          this.router.navigate(['/users']);
        }, 500);
      });
  }
}
