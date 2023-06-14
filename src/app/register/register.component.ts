import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private http : HttpClient){

  }

  onRegister(){
    this.http.post('reqres.in/api/register',{
      email : 'arjum@gmail.com',
      password : '12345678'
    })
  }

}
