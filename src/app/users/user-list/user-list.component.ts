import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  users!: { id: number; name: string }[];

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
    this.userService.usersUpdated.subscribe(
      () => (this.users = this.userService.getUsers())
    );
  }

  onDeleteUser(id: number) {
    this.userService.deleteUser(id);
    this.users = this.userService.getUsers();
  }

  onSelectUser(user: { id: number; name: string }) {
    this.userService.userSelected.emit(user);
  }
}
