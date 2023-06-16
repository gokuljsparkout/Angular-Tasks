import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './users/user/user.component';
import { ManageUsersComponent } from './users/manage-users/manage-users.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UserEditComponent } from './users/manage-users/user-edit/user-edit.component';
import { ModalService } from './users/manage-users/modal.service';
import { ModalModule } from 'src/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UsersComponent,
    SidebarComponent,
    UserComponent,
    ManageUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule,
  ],
  providers: [UserService, ModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
