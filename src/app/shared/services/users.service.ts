import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  constructor(
    private apiService: ApiService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  getUsers() {
    return this.apiService.getUsers().pipe(
      catchError((error) => {
        if (error.error.message === 'Authentication token not provided') {
          this.toastr.error('You are not Authorized', 'Please Login !!');
        } else {
          this.toastr.error(error.error.message);
        }

        this.router.navigate(['/login']);
        return throwError(error);
      })
    );
  }
}
