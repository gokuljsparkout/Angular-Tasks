import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users.routing-module';
import { UserService } from 'src/app/shared/services/users.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UsersComponent],
  imports: [HttpClientModule, UsersRoutingModule, CommonModule],
  providers: [UserService],
  bootstrap: [],
})
export class UsersModule {}
