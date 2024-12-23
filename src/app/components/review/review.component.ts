import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { IItemsReviewData } from '../../models/items.model';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-review',
  imports: [
    NgIf,
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent implements OnInit, OnDestroy {
  public reviews: Observable<IItemsReviewData[]> | null = null;
  public currentWidthScreen: number = 0;
  private destroy$ = new Subject<void>();

  constructor(
    public itemsService: ItemsService,
  ) {}

  ngOnInit(): void {
    this.reviews = this.itemsService
        .getReviews()
        .pipe(
          takeUntil(this.destroy$)
        );
    this.currentWidthScreen = window.screen.width;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
