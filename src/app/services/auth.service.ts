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
    private router: Router
  ) { }

  /** ตอนโหลดหน้าเว็บตรวจสอบจาก localStorage ว่า login อยู่หรือไม่  */
  checkLogin() {
    if (localStorage.getItem('Auth')) {
      this.loginStatus.next(true);
    } else {
      this.router.navigate(['/', 'login']);
    }
  }

  /** สถานะการ Login */
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
    localStorage.removeItem('Auth');
    this.loginStatus.next(false);
    this.router.navigateByUrl('/login');
  }




}
