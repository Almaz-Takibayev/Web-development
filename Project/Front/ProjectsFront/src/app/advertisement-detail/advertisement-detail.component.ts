import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Advertisement} from '../models';
import {MainService} from '../main.service';

@Component({
  selector: 'app-advertisement-detail',
  templateUrl: './advertisement-detail.component.html',
  styleUrls: ['./advertisement-detail.component.css']
})
export class AdvertisementDetailComponent implements OnInit {
  advertisement: Advertisement;

  constructor(private route: ActivatedRoute, private mainService: MainService, private location: Location) { }

  ngOnInit(): void {
    this.getAdvertisement();
  }

  getAdvertisement(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mainService.getAdvertisement(id).subscribe(advertisement => this.advertisement = advertisement);
  }

  goBack(): void {
    this.location.back();
  }
}
