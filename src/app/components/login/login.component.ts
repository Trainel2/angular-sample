import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private spinner: NgxSpinnerService
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
    this.spinner.show();
    this.authService.onLogin(this.form.value).subscribe(
      (res) => {
        this.response = res;
        if (this.response.status === 'success') {
          localStorage.setItem('Auth', JSON.stringify(res));
          Swal.fire({
            title: '',
            text: 'Welcome ' + this.response.fullname,
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
        this.spinner.hide();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
