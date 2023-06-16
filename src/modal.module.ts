import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserEditComponent } from './app/users/manage-users/user-edit/user-edit.component';
import { UserService } from './app/user.service';

@NgModule({
  imports: [CommonModule],
  declarations: [UserEditComponent],
  providers: [UserService],
})
export class ModalModule {}
