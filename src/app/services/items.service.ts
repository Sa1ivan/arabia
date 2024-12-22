import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { priceMapper} from "../mappers/price.mapper";
import {map, Observable} from "rxjs";
import {IItemsPriceData} from "../models/items.model";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
      private http: HttpClient,
  ) { }

  public getPrices():Observable<IItemsPriceData[]> {
    const url = 'https://profi.ru/profile/KhadzhiyevIS3/';
    return this.http.get(url, {responseType: 'text'}).pipe(map(data => priceMapper(data)));
  }
}
