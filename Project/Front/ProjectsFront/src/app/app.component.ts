import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MainService} from './main.service';
import {LoginComponent} from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit {
  title = 'ProjectsFront';

  logged = false;

  constructor() {}

  ngOnChanges() {
    this.ngOnInit();
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    } else {
      this.logged = false;
    }
  }
}
