import { Component, OnInit } from '@angular/core';
import {Advertisement} from '../models';
import {MainService} from '../main.service';

@Component({
  selector: 'app-my-advertisements',
  templateUrl: './my-advertisements.component.html',
  styleUrls: ['./my-advertisements.component.css']
})
export class MyAdvertisementsComponent implements OnInit {

  advertisements: Advertisement[];

  constructor(private mainService: MainService) { }

  getAdvertisements(): void {
    this.mainService.getMyAdvertisementList().subscribe(advertisements => this.advertisements = advertisements);
  }

  ngOnInit(): void {
    this.getAdvertisements();
  }

}
