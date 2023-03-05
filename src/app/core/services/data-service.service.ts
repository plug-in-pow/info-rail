import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { TrainsInfo, TrainsInfoSearchPage, TrainsSearchResult } from '../models/trains-data-model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  baseUrl: string = 'https://info-rail-api-gateway.onrender.com';

  constructor(private http:HttpClient) { }

  getTrainsData(train_number: number): Observable<TrainsInfo> {
    return this.http.get<TrainsInfo[]>(this.baseUrl + '/data',{
      params: {
        'train_no': train_number
      }
    }).pipe(map((res:TrainsInfo[] ) => res[0]));
  }

  getCurrentPageList(page_no: number, pagination_limit: number, order_by: string): Observable<TrainsInfoSearchPage[]> {
    return this.http.get<TrainsInfoSearchPage[]>(this.baseUrl + '/list',{
      params: {
        'limit': pagination_limit,
        'page': page_no,
        'orderBy': order_by
      }
    });
  }

  getMatchingTrainList(searchReq: string): Observable<TrainsSearchResult> {
    return this.http.get<TrainsSearchResult>(this.baseUrl + '/list/search',{
      params: {
        'find': searchReq
      }
    });
  }
}
