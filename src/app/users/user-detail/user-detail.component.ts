import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user: {
    id: number;
    name: string;
  } = {
    id: 0,
    name: '',
  };
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.userSelected.subscribe((user) => {
      this.user = user;
    });
  }

  onEditUser() {
    this.userService.showForm = !this.userService.showForm;
    this.userService.showStatusChanged.emit();
  }
}
