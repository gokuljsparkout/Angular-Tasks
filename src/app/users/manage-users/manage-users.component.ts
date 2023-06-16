import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css'],
})
export class ManageUsersComponent implements OnInit {
  users: any[] = [];

  constructor(
    private userService: UserService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getUsers().subscribe((response: any) => {
      this.users = response.data;
    });
  }

  onDelete(id: number) {
    this.userService.deleteUserById(id).subscribe(
      () => {
        console.log('User deleted successfully.');
        this.users = this.users.filter((user) => user.id !== id);
      },
      (error) => {
        console.log('Error deleting user:', error);
      }
    );
  }

  openModal(modalTemplate: TemplateRef<any>) {
    this.modalService
      .open(modalTemplate, { size: 'lg', title: 'Foo' })
      .subscribe((action) => {
        console.log('modalAction', action);
      });
  }
  displayStyle = 'none';

  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
}
