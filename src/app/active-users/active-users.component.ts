import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  users: string[] = [];

  constructor(private userService: UserService) {
    this.users = this.userService.activeUsers;
  }

  onSetToInActive(id: number) {
    this.userService.setToInActive(id);
  }
}
