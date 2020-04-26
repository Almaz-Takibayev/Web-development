import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-headerbeforelogin',
  templateUrl: './headerbeforelogin.component.html',
  styleUrls: ['./headerbeforelogin.component.css']
})
export class HeaderbeforeloginComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

}
