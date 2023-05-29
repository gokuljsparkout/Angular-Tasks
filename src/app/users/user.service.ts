import { EventEmitter } from '@angular/core';

export class UserService {
  users = [
    { id: 1, name: 'Gokul' },
    { id: 2, name: 'Luffy' },
    { id: 3, name: 'Zoro' },
    { id: 4, name: 'Sanji' },
  ];

  showForm: boolean = false;
  getUsers() {
    return this.users.slice();
  }

  getShowStatus() {
    return this.showForm;
  }
  showStatusChanged = new EventEmitter();

  usersUpdated = new EventEmitter();

  userSelected = new EventEmitter<{
    id: number;
    name: string;
  }>();

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
    1;
    console.log(this.users);
  }
}
