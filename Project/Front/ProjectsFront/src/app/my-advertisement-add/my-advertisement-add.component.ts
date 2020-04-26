import { Component, OnInit } from '@angular/core';
import {MainService} from '../main.service';

@Component({
  selector: 'app-my-advertisement-add',
  templateUrl: './my-advertisement-add.component.html',
  styleUrls: ['./my-advertisement-add.component.css']
})
export class MyAdvertisementAddComponent implements OnInit {
  brand = '';
  model = '';
  country = '';
  status = '';
  body = '';
  typeOfEngine = '';
  transmission = '';
  steeringWheel = '';
  driveWheel = '';
  mileage = 0;
  engineCapacity = 0;
  yearOfManufacture = 0;
  color = '';
  description = '';
  price = 0;
  imageBase = '';
  image1 = '';
  image2 = '';

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
  }

  addAdvertisement(brand, model, country, status, body, typeOfEngine, transmission, steeringWheel, driveWheel, mileage, engineCapacity,
                   yearOfManufacture, color, description, price, imageBase, image1, image2) {
    // tslint:disable-next-line:max-line-length
    this.mainService.addMyAdvertisement(brand, model, country, status, body, typeOfEngine, transmission, steeringWheel, driveWheel, mileage, engineCapacity,
      yearOfManufacture, color, description, price, imageBase, image1, image2);
  }

}
