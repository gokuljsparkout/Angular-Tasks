import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/shared/services/register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  kyc1: string =
    'http://3.130.18.101/farmsent-assets/images/kyc/1681284376554/83b5009e040969ee7b60362ad74265731681284376554.png';
  kyc2: string =
    'http://3.130.18.101/farmsent-assets/images/kyc/1681284376563/ea571676ce9b75b0730a5d56350ae93e1681284376563.png';

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}
  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      countryCode: new FormControl('91', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
      ]),
      kyc1: new FormControl(this.kyc1),
      kyc2: new FormControl(this.kyc2),
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      this.registerService.registerUser({
        name: this.registerForm.get('name')?.value,
        email: this.registerForm.get('email')?.value,
        country_code: '+' + this.registerForm.get('countryCode')?.value,
        phone_number: this.registerForm.get('phoneNumber')?.value,
        password: this.registerForm.get('password')?.value,
        kyc_document: [
          this.registerForm.get('kyc1')?.value,
          this.registerForm.get('kyc2')?.value,
        ],
      });
    }
  }
}
