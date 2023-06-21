import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class RegisterService {
  constructor(
    private apiService: ApiService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  registerUser(data: any) {
    return this.apiService
      .registerUser(data)
      .pipe(
        catchError((error) => {
          this.toastr.error(error.error.message)
          return throwError(error);
        })
      )
      .subscribe((response: any) => {
        this.toastr.success(response.message)
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1000);
      });
  }
}
