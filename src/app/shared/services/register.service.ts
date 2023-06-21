import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class RegisterService {
  constructor(private apiService: ApiService) {}

  registerUser(data: any) {
    return this.apiService.registerUser(data);
  }
}
