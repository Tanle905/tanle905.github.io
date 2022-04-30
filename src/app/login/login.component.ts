import { Component, OnInit, SimpleChange } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  loginFailed: boolean = false;
  constructor(
    private authService: AuthService,
    private route: Router,
    authGuardService: AuthGuardService
  ) {}
  onLogin(form: NgForm) {
    if (form.valid) {
      this.authService.loginDetail = [this.username, this.password];
      this.route.navigate(['/admin/user']);
      this.authService.isAuthenticated().catch(() => (this.loginFailed = true));
    }
  }
  ngOnInit(): void {}
}
