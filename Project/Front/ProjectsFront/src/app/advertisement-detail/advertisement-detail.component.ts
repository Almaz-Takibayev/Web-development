import { Component, OnInit } from '@angular/core';
import {Advertisement} from '../advertisement';
import {ActivatedRoute} from '@angular/router';
import {AdvertisementService} from '../advertisement.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-advertisement-detail',
  templateUrl: './advertisement-detail.component.html',
  styleUrls: ['./advertisement-detail.component.css']
})
export class AdvertisementDetailComponent implements OnInit {
  advertisement: Advertisement;

  constructor(private route: ActivatedRoute, private advertisementService: AdvertisementService, private location: Location) { }

  ngOnInit(): void {
    this.getAdvertisement();
  }

  getAdvertisement(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.advertisementService.getAdvertisement(id).subscribe(advertisement => this.advertisement = advertisement);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.advertisementService.updateAdvertisement(this.advertisement)
      .subscribe(() => this.goBack());
  }
}
