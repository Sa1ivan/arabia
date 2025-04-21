import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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

  public getPrices(): Observable<IItemsPriceData[]> {
    const url = 'https://profi.ru/profile/KhadzhiyevIS3/';
    return this.http.get(url, {responseType: 'text'}).pipe(map(data => priceMapper(data)));
  }

  public getReviews(): Observable<IItemsReviewData[]> {
    const url = 'https://profi.ru/profile/KhadzhiyevIS3/reviews/';
    return this.http.get(url, {responseType: 'text'}).pipe(map(data => reviewMapper(data)));
  }
}
