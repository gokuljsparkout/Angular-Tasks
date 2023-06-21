import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      this.toastr.error('Please fill in all the required fields.');
    } else {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
    }
  }
}
