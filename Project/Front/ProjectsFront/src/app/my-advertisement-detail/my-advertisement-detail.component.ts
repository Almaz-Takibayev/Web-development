import { Component, OnInit } from '@angular/core';
import {Advertisement} from '../models';
import {ActivatedRoute} from '@angular/router';
import {MainService} from '../main.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-my-advertisement-detail',
  templateUrl: './my-advertisement-detail.component.html',
  styleUrls: ['./my-advertisement-detail.component.css']
})
export class MyAdvertisementDetailComponent implements OnInit {

  advertisement: Advertisement;

  constructor(private route: ActivatedRoute, private mainService: MainService, private location: Location) { }

  ngOnInit(): void {
    this.getAdvertisement();
  }

  getAdvertisement(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mainService.getMyAdvertisement(id).subscribe(advertisement => this.advertisement = advertisement);
  }

  goBack(): void {
    this.location.back();
  }

  delete(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mainService.deleteMyAdvertisement(id).subscribe(advertisement => this.advertisement = advertisement);
  }

}
