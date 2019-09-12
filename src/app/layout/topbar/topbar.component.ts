import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  authData: any;

  constructor() { }

  ngOnInit() {
    /** get value from auth */
    this.authData = JSON.parse(localStorage.getItem('Auth'));
  }

}
