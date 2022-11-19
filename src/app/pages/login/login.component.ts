import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/api/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: { username: string; password: string } = { username: '', password: '' };
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  constructor(
    private authservice: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  onLoginSubmit() {
    this.user.password = this.loginForm.value.password as string;
    this.user.username = this.loginForm.value.username as string;

    this.authservice
      .postRequest({
        username: this.user.username,
        password: this.user.password,
      })
      .subscribe((res) => {
        this.userService.setUserData(res);
        this.router.navigateByUrl('/listings');
      });
  }
  ngOnInit(): void {}
}
