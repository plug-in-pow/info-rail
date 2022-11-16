import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  trainsApiUrl: string = 'http://localhost:4200/assets/json/trains.json';

  constructor(private http:HttpClient) { }

  getTrainsData() {
    return this.http.get(this.trainsApiUrl);
  }
}
