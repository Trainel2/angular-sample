import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'glove';
  isLogin: boolean;
  constructor(
    private authService: AuthService,
  ) {
    this.authService.checkLogin();
  }

  onAdtivate() {
    // ตรวจสอบสถานะการ Login
    this.isLogin = this.authService.isLogin();
  }
}
