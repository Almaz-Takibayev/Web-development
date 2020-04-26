import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Advertisement, LoginResponse, User, UserProfile} from './models';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  BASE_URL = 'http://localhost:8000';
  constructor(private http: HttpClient) {}

  getAdvertisementList(): Observable<Advertisement[]> {
    return this.http.get<Advertisement[]>(`${this.BASE_URL}/kolesa.kz/advertisements/`);
  }

  getAdvertisementListByBrand(brand): Observable<Advertisement[]> {
    return this.http.get<Advertisement[]>(`${this.BASE_URL}/kolesa.kz/advertisements/${brand}/`);
  }

  getAdvertisementListByBrandModel(brand, model): Observable<Advertisement[]> {
    return this.http.get<Advertisement[]>(`${this.BASE_URL}/kolesa.kz/advertisements/${brand}/${model}/`);
  }

  getAdvertisementListByBrandModelYear(brand, model, year): Observable<Advertisement[]> {
    return this.http.get<Advertisement[]>(`${this.BASE_URL}/kolesa.kz/advertisements/${brand}/${model}/${year}/`);
  }

  getAdvertisement(id): Observable<Advertisement> {
    return this.http.get<Advertisement>(`${this.BASE_URL}/kolesa.kz/advertisements/${id}/`);
  }

  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/kolesa.kz/login/`, {
      username,
      password
    });
  }

  getMyAdvertisementList(): Observable<Advertisement[]> {
    return this.http.get<Advertisement[]>(`${this.BASE_URL}/kolesa.kz/my_advertisements/`);
  }

  getMyAdvertisement(id): Observable<Advertisement> {
    return this.http.get<Advertisement>(`${this.BASE_URL}/kolesa.kz/my_advertisements/${id}/`);
  }

  deleteMyAdvertisement(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/kolesa.kz/my_advertisements/${id}/`);
  }

  addMyAdvertisement(brand, model, country, status, body, typeOfEngine, transmission, steeringWheel, driveWheel, mileage, engineCapacity,
                     yearOfManufacture, color, description, price, imageBase, image1, image2): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.post(`${this.BASE_URL}/kolesa.kz/my_advertisements/`, {brand, model, country, status, body, typeOfEngine, transmission, steeringWheel,
                      driveWheel, mileage, engineCapacity, yearOfManufacture, color, description, price, imageBase, image1, image2});
  }

  signup(username, email, password, phoneNumber): Observable<any> {
    return this.http.post(`${this.BASE_URL}/kolesa.kz/signup/`, {username, email, password, phoneNumber});
  }

  getMyProfile(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/kolesa.kz/my_profile/`);
  }

  deleteMyProfile(): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/kolesa.kz/my_profile/`);
  }

  updateMyProfile(userProfile: UserProfile): Observable<any> {
    const username = userProfile.user.username;
    const email = userProfile.user.email;
    const password = userProfile.user.password;
    const phoneNumber = userProfile.phoneNumber;
    return this.http.put(`${this.BASE_URL}/kolesa.kz/my_profile/`, { username, email, password, phoneNumber});
  }
}
