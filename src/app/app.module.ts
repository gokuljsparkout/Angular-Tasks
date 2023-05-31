import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProtectedComponent } from './protected/protected.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProtectedComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
