import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserService } from './users/user.service';

@NgModule({
  declarations: [AppComponent, UserListComponent, UserDetailComponent, UserFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
