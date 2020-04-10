import { Component, OnInit } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(logemail: any, logpassword: any) {
    const loginObserver = {
      next: x => console.log('User logged in'),
      error: err => console.log(err)
    };
    this.authService.logUser(logemail.value.toString(), logpassword.toString().trim()).subscribe(loginObserver);
  }

}
