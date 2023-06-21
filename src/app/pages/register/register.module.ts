import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register.routing-module';
import { RegisterService } from '../../shared/services/register.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    HttpClientModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [RegisterService],
  bootstrap: [],
})
export class RegisterModule {}
