import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Company, LoginResponse, Vacancy} from './models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  BASE_URL = 'http://localhost:8000'
  constructor(private http: HttpClient) {}

  getCategoryList(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.BASE_URL}/api/companies/`);
  }

  getCategory(id): Observable<Company> {
    return this.http.get<Company>(`${this.BASE_URL}/api/companies/${id}/`);
  }

  deleteCategory(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/companies/${id}/`);
  }

  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`,{
      username,
      password
    });
  }
  getVacanciesByCompanies(pk: string): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${pk}/vacancies`);
  }
  getVacancyById(pk: string): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.BASE_URL}/api/vacancies/${pk}`);
  }

}


