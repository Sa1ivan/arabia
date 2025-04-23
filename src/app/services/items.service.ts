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

  public getPrices(): Observable<any> {
    const url = 'assets/mock/prices.json';
    const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    return this.http
        .get(url)
        .pipe(
            map(data => data)
        );
  }

  public getReviews(): Observable<any> {
    const url = 'assets/mock/reviews.json';
    const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'})
    return this.http
        .get(url)
        .pipe(
            map(x => x)
        );
  }
}
