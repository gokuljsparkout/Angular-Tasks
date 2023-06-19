import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router : Router
  ) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  onRegister() {
    this.authService
      .register(
        this.registerForm.get('email')?.value,
        this.registerForm.get('password')?.value
      )
      .subscribe((response) => {
        if (response) {
          this.toastr.success(' User Registered Successfully',);
        }
        else{
          this.toastr.error('User Registered Already')
        }
        setTimeout(() => {
          this.router.navigate(['/login'])
        }, 1000);
       
      });
  }
}
