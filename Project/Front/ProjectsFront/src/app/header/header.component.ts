import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  logout(): void {
    localStorage.clear();
    AppComponent.prototype.logged = false;
  }

}
