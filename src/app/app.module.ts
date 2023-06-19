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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserComponent } from './users/user/user.component';
import { ManageUsersComponent } from './users/manage-users/manage-users.component';
import { ApiService } from './api.service';
import { FakeBackendInterceptor } from './interceptor';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule, ToastrService } from 'ngx-toastr';

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
    DashboardComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    UserService,
    ApiService,
    AuthService,
    AuthGuard,
    ToastrService,
    FakeBackendInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
