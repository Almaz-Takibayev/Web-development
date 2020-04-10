import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {User} from './user';
import {Advertisement} from './advertisement';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, name: 'Dr Nice', login: 'nice@gmail.com', password: '123', phone: '8707' },
      { id: 12, name: 'Narco', login: 'narco@gmail.com', password: '123', phone: '8707' },
      { id: 13, name: 'Bombasto', login: 'bomba@gmail.com', password: '123', phone: '8707' },
      { id: 14, name: 'Celeritas', login: 'cele@gmail.com', password: '123', phone: '8707' },
      { id: 15, name: 'Magneta', login: 'magneta@gmail.com', password: '123', phone: '8707' }
    ];
    const advertisements = [
      // tslint:disable-next-line:max-line-length
      { id: 11, brand: 'toyota', model: 'camry', country: 'Japan', body: 'sedan', engineCapacity: '2.5', description: 'Toyota camry 70.', price: '100000$', imageBase: 'https://avtodeluxe.ru/images/avto-big/arenda-toyota-camry-70-black-avtodeluxe-big.jpg', image1: 'https://t1-cms-3.images.toyota-europe.com/toyotaone/kzru/%D0%A1amry-70-2_tcm-3051-1330802.jpg', image2: 'https://vip-prokat.kz/wp-content/uploads/2018/10/prokat_toyota_kamri_70_almatyi.jpg' },
      // tslint:disable-next-line:max-line-length
      { id: 12, brand: 'mercedes', model: 'E300', country: 'Germany', body: 'sedan', engineCapacity: '3.0', description: 'Mercedes Benz E300.', price: '100000$', imageBase: 'https://a.d-cd.net/7ffab99s-960.jpg', image1: 'https://blamper.ru/steady/53/3e/a8/original/533ea81ebc33daf339c7afa6/568x390_znachenie-simvola-p-i-strelochki-na-paneli-priborov-mercedes-e-class-w212.jpg', image2: 'https://driveland.by/i/photo/class-w-212-white/class-w-212-white-big.jpg' },
      // tslint:disable-next-line:max-line-length
      { id: 13, brand: 'bmw', model: 'X6', country: 'Germany', body: 'SUV', engineCapacity: '4.0', description: 'BMW X6.', price: '100000$', imageBase: 'https://cdnimg.rg.ru/img/content/173/88/30/P90363149-highRes_d_850.jpg', image1: 'https://cdn.motor1.com/images/mgl/1GpEK/s3/bmw-x6-in-vantablack-2019.jpg', image2: 'https://mport.ua/i/10/68/06/3/1068063/gallery/020d1bac8cac018ebcf74b21497585c8-quality_70Xresize_1Xallow_enlarge_0Xw_800Xh_600.jpg' },
      // tslint:disable-next-line:max-line-length
      { id: 14, brand: 'lexus', model: 'LX570', country: 'Japan', body: 'SUV', engineCapacity: '5.7', description: 'Lexus LX570.', price: '100000$', imageBase: 'https://i.pinimg.com/originals/cd/db/07/cddb07689c77d74c74ada5518cf2f5f1.jpg', image1: 'https://i.pinimg.com/originals/77/56/ac/7756ac49f002bcf78775f39d5fba45c9.jpg', image2: 'https://focus2move.com/wp-content/uploads/2016/09/Lexus-LX_570-2016.jpg' },
      // tslint:disable-next-line:max-line-length
      { id: 15, brand: 'toyota', model: 'Land Cruiser 200', country: 'Japan', body: 'SUV', engineCapacity: '4.7', description: 'Toyota Land Cruiser 200.', price: '100000$', imageBase: 'https://imgd.aeplcdn.com/1056x594/n/r5it6ra_1421860.jpg?q=85', image1: 'https://www.autoredo.com/wp-content/uploads/2019/02/LC200-V8-BLACK-e1551362300355.jpg', image2: 'https://images.toyota-europe.com/eu/product-token/352ecaa0-90b5-4da5-9a3c-281e28930912/vehicle/efd9dd5d-d625-4768-8466-e666a3eba32d/width/555/height/277/padding/0/background-colour/fff/image-quality/70/day-exterior-27_218.jpg' }
    ]
    return {users, advertisements};
  }

  genId1(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }

  genId2(advertisements: Advertisement[]): number {
    return advertisements.length > 0 ? Math.max(...advertisements.map(advertisement => advertisement.id)) + 1 : 11;
  }
}
