import { Component, OnInit } from '@angular/core';
import {MainService} from '../main.service';
import {Advertisement} from '../models';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.css']
})
export class AdvertisementsComponent implements OnInit {

  advertisements: Advertisement[];

  constructor(private mainService: MainService) { }

  getAdvertisements(): void {
    this.mainService.getAdvertisementList().subscribe(advertisements => this.advertisements = advertisements);
  }

  ngOnInit(): void {
    this.getAdvertisements();
  }

  // tslint:disable-next-line:max-line-length
  // add(brand: string, model: string, country: string, body: string, engineCapacity: string, description: string, price: number, imageBase: string, image1: string, image2: string): void {
  //   brand = brand.trim();
  //   model = model.trim();
  //   country = country.trim();
  //   body = body.trim();
  //   engineCapacity = engineCapacity.trim();
  //   description = description.trim();
  //   imageBase = imageBase.trim();
  //   image1 = image1.trim();
  //   image2 = image2.trim();
  //   if (!brand) { return; }
  //   if (!model) { return; }
  //   if (!country) { return; }
  //   if (!body) { return; }
  //   if (!engineCapacity) { return; }
  //   if (!description) { return; }
  //   if (!price) { return; }
  //   if (!imageBase) { return; }
  //   if (!image1) { return; }
  //   if (!image2) { return; }
  //   // tslint:disable-next-line:max-line-length
  //   this.mainService.ad({ brand, model, country, body, engineCapacity, description, price, imageBase, image1, image2 } as Advertisement)
  //     .subscribe(advertisement => {
  //       this.advertisements.push(advertisement);
  //     });
  // }

  // delete(advertisement: Advertisement): void {
  //   this.advertisements = this.advertisements.filter(a => a !== advertisement);
  //   this.advertisementService.deleteAdvertisement(advertisement).subscribe();
  // }

}
