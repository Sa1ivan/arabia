import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { priceMapper} from "../mappers/price.mapper";
import {map, Observable} from "rxjs";
import {IItemsPriceData, IItemsReviewData} from "../models/items.model";
import { reviewMapper } from '../mappers/review.mapper';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
      private http: HttpClient,
  ) { }
  private api = 'http://localhost:4200/';
  public getPrices(): Observable<IItemsPriceData[]> {
    const url = '/api/profile/KhadzhiyevIS3/';
    const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    return this.http.get(url, {responseType: 'text'}).pipe(map(data => priceMapper(data)));
  }

  public getReviews(): Observable<IItemsReviewData[]> {
    const url = '/api/profile/KhadzhiyevIS3/reviews/';
    const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'})
    return this.http.get(url, {responseType: 'text', headers}).pipe(map(data => reviewMapper(data)));
  }
}
