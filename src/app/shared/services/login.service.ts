import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class LoginService {
  constructor(private apiService: ApiService) {}
  loginUser(email: string, password: string) {
    return this.apiService.login(email,password)
  }
}
