import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // Logic for the login component can be added here
  // For example, handling form submission, validation, etc.
  // tìm hiểu lifecycle hooks trong angular tức là vòng đời của component trong angular
  formLogin!: FormGroup;
  constructor(
    // Inject any necessary services here, e.g., AuthService for authentication
    public router: Router,
    public form: FormBuilder,
    public loginService: LoginService
  ) {}
  ngOnInit() {
    this.formLogin = this.form.group({
      email: [''],
      password: [''],
    });
  }

  onNavigateToForgot() {
    this.router.navigate(['/login/forgot-password']);
  }

  handleLogin() {
    const valueForm = this.formLogin.value; //đây đang là object chưa email và password
    const bodyFormSubmit = {
      tendangnhap: valueForm.email,
      matkhau: valueForm.password,
    }

    console.log(valueForm);
    //gui thông tin form xuống backend qua api
    this.loginService.login(bodyFormSubmit).subscribe(
      (response) => {
        console.log(response);
      }
    )
  }
}

