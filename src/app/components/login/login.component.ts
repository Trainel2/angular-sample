import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

// CommonJS
// const Swal = require('sweetalert2');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  response: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.initialFormLogin();
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
        this.response = res;
        if (this.response.status === 'success') {
          localStorage.setItem('username', JSON.stringify(res));
          Swal.fire({
            title: '',
            text: this.response.message,
            type: this.response.status,
            timer: 2000
          });

          this.authService.loginStatus.next(true);
          this.route.navigate(['/', 'dashboard']);
        } else {
          Swal.fire({
            title: '',
            text: this.response.message,
            type: this.response.status,
          });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
