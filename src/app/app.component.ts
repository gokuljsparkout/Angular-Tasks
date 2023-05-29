import { Component } from '@angular/core';
import { UserService } from './users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showForm!: boolean;
  constructor(private userService: UserService) {
    this.userService.getUsers();
    this.userService.showStatusChanged.subscribe(()=>{
      this.showForm =this.userService.getShowStatus()
    })
    
  }
  
}
