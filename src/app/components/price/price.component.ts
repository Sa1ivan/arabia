import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemsService } from "../../services/items.service";
import {
  NgForOf,
  AsyncPipe
} from "@angular/common";
import {Observable, Subject, takeUntil} from "rxjs";
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
export class PriceComponent implements OnInit, OnDestroy {
  public prices: Observable<IItemsPriceData[]> | null = null;
  private destroy$ = new Subject<void>();
  constructor(
      public itemsService: ItemsService
  ) {}

  ngOnInit() {
    this.prices = this.itemsService.getPrices().pipe(
      takeUntil(this.destroy$)
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
