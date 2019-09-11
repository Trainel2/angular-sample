import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router
  ) { }

  ngOnInit() {
    this.initialFormLogin();
    this.authService.checkLogin();
  }

  initialFormLogin() {
    this.form = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  onSubmit() {
    this.authService.onLogin(this.form.value).subscribe(
      (res) => {
        localStorage.setItem('username', 'test');
        alert('login success');
        this.route.navigate(['/', 'dashboard']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
