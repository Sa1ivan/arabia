import { NgForOf, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { IItemsReviewData } from '../../models/items.model';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-review',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent implements OnInit, OnDestroy {
  public reviews: Observable<IItemsReviewData[]> | null = null;
  public allReviews: IItemsReviewData[] = [];
  private destroy$ = new Subject<void>();
  public currentScreen: number = 0;
  public isOpen: boolean = false;
  public shortReviews: IItemsReviewData[] = [];

  public getAllReviews() {
    return this.isOpen = !this.isOpen;
  }

  constructor(
    public itemsService: ItemsService,
  ) {}

  ngOnInit(): void {
    this.currentScreen = window.screen.width;
    this.reviews = this.itemsService
        .getReviews()
        .pipe(
          takeUntil(this.destroy$),
            tap(reviews => {
              if (reviews && reviews.length > 0) {
                this.allReviews = reviews;
                reviews.forEach((review, i) => {
                  if(review && i < 5) {
                    this.shortReviews.push(review);
                  }
                })
              }
            })
        )
    this.reviews
        .pipe(
            takeUntil(this.destroy$),
        )
        .subscribe()
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
