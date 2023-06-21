import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  dataCollection :any
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((response: any) => {
      console.log(response);
      this.dataCollection = response.data;
      console.log(this.dataCollection);
    });
  }
}
