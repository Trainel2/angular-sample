import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://korawinsupply.com/api/glove/glove.php/auth';
  loginStatus = new BehaviorSubject(false);

  constructor(
    private httpClient: HttpClient,
    private route: Router
  ) { }

  /** check localStorage is login ? */
  checkLogin() {
    if (localStorage.getItem('username')) {
      this.loginStatus.next(true);
      this.route.navigate(['/', 'dashboard']);
    } else {
      this.route.navigate(['/', 'login']);
    }
  }

  isLogin() {
    return this.loginStatus.value;
  }

  /** login function */
  onLogin(value: any) {
    const header = { 'Content-Type': 'application/json' };
    return this.httpClient.post(this.apiUrl, value, { headers: header });
  }

  /** logout function */
  onLogOut() {
    this.route.navigateByUrl('/login');
    this.loginStatus.next(false);
  }




}
