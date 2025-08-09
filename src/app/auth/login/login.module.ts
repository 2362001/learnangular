import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModuleShare } from 'src/app/common/ng-zorro-antd.module';

@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent],
  imports: [CommonModule, LoginRoutingModule , FormsModule, ReactiveFormsModule, ModuleShare],
})
export class LoginModule {}
