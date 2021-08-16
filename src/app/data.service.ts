import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QouteResults } from 'src/core/model/qouteResults';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getRandomQoute(qouteUrl: string): Observable<QouteResults[]> {
    return this.http.get<QouteResults[]>(qouteUrl);
  }

  generateRandomInt(max?: number): number {
    if (!max) {
      max = 100;
    }
    return Math.floor(Math.random() * max);
  }
}