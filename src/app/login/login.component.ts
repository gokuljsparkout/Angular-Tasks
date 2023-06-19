import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private tostr: ToastrService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  onLogin() {
    this.authService
      .login(
        this.loginForm.get('email')?.value,
        this.loginForm.get('password')?.value
      )
      .subscribe((response) => {
        if (response.token) {
          this.tostr.success('Login Succesful');

          this.authService.logstatusChanged.next(null);
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 1000);
        } else {
          this.tostr.warning('User not Registered');
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 1000);
        }
      });
  }
}
