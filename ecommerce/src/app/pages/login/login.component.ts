import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  isVerifyLogin: boolean = false;
  isIncorect: boolean = false;
  constructor(
    private forrmBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = this.forrmBuilder.group({
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }
  login() {
    console.log(this.formLogin.errors)
    this.isVerifyLogin = true;
    this.authService.authentication(this.formLogin.value).subscribe(
      (res) =>
      { console.log(res),
        this.isVerifyLogin = false,
        this.authService.updateLogin(true),
        this.router.navigate(['/products'])
      },
      (error) => {alert(error.error), this.isVerifyLogin = false, this.isIncorect = true, this.resetForm()},
    );
  }

  resetForm(){
    this.formLogin.reset();
  }
}
