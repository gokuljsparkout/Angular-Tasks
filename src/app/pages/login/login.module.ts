import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing-module';
import { LoginService } from 'src/app/shared/services/login.service';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    LoginRoutingModule,
  ],
  providers: [LoginService],
  bootstrap: [],
})
export class LoginModule {}
