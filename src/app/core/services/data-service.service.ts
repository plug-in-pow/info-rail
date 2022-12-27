import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  baseUrl: string = 'https://info-rail-api-gateway.onrender.com';

  constructor(private http:HttpClient) { }

  getTrainsData(train_number: number) {
    return this.http.get(this.baseUrl + '/data',{
      params: {
        'train_no': train_number
      }
    });
  }

  getCurrentPageList(page_no: number, pagination_limit: number, order_by: string) {
    return this.http.get(this.baseUrl + '/list',{
      params: {
        'limit': pagination_limit,
        'page': page_no,
        'orderBy': order_by
      }
    });
  }
}
