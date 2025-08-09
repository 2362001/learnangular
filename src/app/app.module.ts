import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModuleShare } from './common/ng-zorro-antd.module';
import { AuthInterceptor } from './core/auth.interceptor';

registerLocaleData(vi);

@NgModule({
  declarations: [
    // Khai bao dang ki cac module , gen bang cau lenh thi tu dong, tao chay thi phai them vao
    AppComponent,
  ],
  imports: [BrowserModule, AppRoutingModule , HttpClientModule, FormsModule, BrowserAnimationsModule, ModuleShare],
    providers: [
    { provide: NZ_I18N, useValue: vi_VN },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
