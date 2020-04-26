import { Component, OnInit } from '@angular/core';
import {MainService} from '../main.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  logged = false;

  username = '';
  password = '';
  email = '';
  phoneNumber = '';

  constructor(private mainService: MainService) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
      AppComponent.prototype.logged = true;
    }
  }

  signup(username, email, password, phoneNumber) {
    localStorage.removeItem('token');
    this.mainService.signup(username, email, password, phoneNumber)
      .subscribe(res => {
        localStorage.setItem('token', res.token);
        this.logged = true;
        AppComponent.prototype.logged = true;
        this.username = '';
        this.email = '';
        this.phoneNumber = '';
        this.password = '';
      });
  }

  // login() {
  //   this.mainService.login(this.username, this.password)
  //     .subscribe(res => {
  //
  //       localStorage.setItem('token', res.token);
  //
  //       this.logged = true;
  //
  //       this.username = '';
  //       this.password = '';
  //     });
  // }

  logout() {
    localStorage.clear();
    this.logged = false;
    AppComponent.prototype.logged = false;
  }

}
