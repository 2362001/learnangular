import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private notification: NzNotificationService
  ) {}

  //luoon luon khoi tao form o oninit
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [null, Validators.required],
      passWord: [null, Validators.required],
      remember: [true],
    });
  }

  submitForm() {
    console.log(this.loginForm);
    if (this.loginForm.invalid) {
      Object.values(this.loginForm.controls).forEach((control: any) => {
        control.markAsDirty();
        control.updateValueAndValidity();
      });
      return;
    }

    const valueForm = this.loginForm.value;
    localStorage.setItem(
      'userInfo',
      JSON.stringify({
        userName: valueForm.userName,
        passWord: valueForm.passWord,
        remember: valueForm.remember,
      })
    );

    this.router.navigate(['/']);
    this.notification.success('Success', 'Đăng nhập thành công!', {
      nzDuration: 3000,
    });
  }
}
