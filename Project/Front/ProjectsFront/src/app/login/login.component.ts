import { Component, OnInit } from '@angular/core';
import {MainService} from '../main.service';
import {log} from 'util';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logged = false;

  username = '';
  password = '';

  constructor(private mainService: MainService) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
      AppComponent.prototype.logged = true;
    }
  }

  login(username, password) {
    localStorage.removeItem('token');
    this.mainService.login(username, password)
      .subscribe(res => {

        localStorage.setItem('token', res.token);

        console.log(res.token);

        this.logged = true;
        AppComponent.prototype.logged = true;
        this.username = '';
        this.password = '';
      });
  }

  logout() {
    localStorage.clear();
    this.logged = false;
    AppComponent.prototype.logged = true;
  }

}
