import { Component } from '@angular/core';
import { ItemsService } from "../../services/items.service";
import {
  NgForOf,
  AsyncPipe
} from "@angular/common";
import {Observable} from "rxjs";
import {IItemsPriceData} from "../../models/items.model";

// @ts-ignore
@Component({
  selector: 'app-price',
  imports: [
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent {
  public prices: Observable<IItemsPriceData[]> | null = null;
  constructor(
      public itemsService: ItemsService
  ) {}

  ngOnInit() {
    this.prices = this.itemsService.getPrices();
  }
}
