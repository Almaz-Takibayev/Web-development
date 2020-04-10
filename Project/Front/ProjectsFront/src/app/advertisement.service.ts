import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Advertisement} from './advertisement';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {
  private advertisementUrl = 'api/advertisements';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAdvertisements(): Observable<Advertisement[]> {
    return this.http.get<Advertisement[]>(this.advertisementUrl)
      .pipe(
        catchError(this.handleError<Advertisement[]>('getAdvertisements', []))
      );
  }

  getAdvertisementNo404<Data>(id: number): Observable<Advertisement> {
    const url = `${this.advertisementUrl}/?id=${id}`;
    return this.http.get<Advertisement[]>(url)
      .pipe(
        map(advertisements => advertisements[0]),
        catchError(this.handleError<Advertisement>(`getAdvertisement id=${id}`))
      );
  }

  getAdvertisement(id: number): Observable<Advertisement> {
    const url = `${this.advertisementUrl}/${id}`;
    return this.http.get<Advertisement>(url).pipe(
      catchError(this.handleError<Advertisement>(`getAdvertisement id=${id}`))
    );
  }

  addAdvertisement(advertisement: Advertisement): Observable<Advertisement> {
    return this.http.post<Advertisement>(this.advertisementUrl, advertisement, this.httpOptions).pipe(
      catchError(this.handleError<Advertisement>('addAdvertisement'))
    );
  }

  deleteAdvertisement(advertisement: Advertisement | number): Observable<Advertisement> {
    const id = typeof advertisement === 'number' ? advertisement : advertisement.id;
    const url = `${this.advertisementUrl}/${id}`;

    return this.http.delete<Advertisement>(url, this.httpOptions).pipe(
      catchError(this.handleError<Advertisement>('deleteAdvertisement'))
    );
  }

  updateAdvertisement(advertisement: Advertisement): Observable<any> {
    return this.http.put(this.advertisementUrl, advertisement, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateAdvertisement'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
