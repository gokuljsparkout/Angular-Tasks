import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersModule } from './pages/users/users.module';
import { ApiService } from './shared/services/api.service';
import { RegisterModule } from './pages/register/register.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LoginModule } from './pages/login/login.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersModule,
    RegisterModule,
    LoginModule,
    ToastrModule.forRoot(),
  ],
  providers: [ApiService, ToastrService],
  bootstrap: [AppComponent],
})
export class AppModule {}
