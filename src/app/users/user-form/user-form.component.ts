import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  @ViewChild('UserNameInput') userName!: ElementRef;
  constructor(private userService: UserService) {}
  id = 0;

  updatedUser = {
    id: 0,
    name: 'string',
  };

  ngOnInit() {
    this.userService.userSelected.subscribe((user) => {
      this.id = user.id;
    });
  }

  onSubmit() {
     this.userService.users[this.id-1].name = this.userName.nativeElement.value;
     this.userService.usersUpdated.emit();
  }
}
