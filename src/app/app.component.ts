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
    private route: Router
  ) {
    this.authService.checkLogin();
  }

  onAdtivate(component: any) {
    console.log(component);
    this.isLogin = this.authService.isLogin();
  }
}
