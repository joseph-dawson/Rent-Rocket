import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Review } from './review';
import { REVIEWS } from '../mock-reviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  getReviews(): Observable<Review[]> {
    const reviews = of(REVIEWS);
    return reviews;
  }

  getLandlordReviews(id: number): Observable<Review[]> {
    const landlordReviews = REVIEWS.filter(r => r.landlordId === id)!;
    return of(landlordReviews);
  }

  getPropertyReviews(id: number): Observable<Review[]> {
    const propertyReviews = REVIEWS.filter(r => r.propertyId === id)!;
    return of(propertyReviews);
  }

  getLandlordReviewScore(id: number): Observable<number> {
    const landlordReviews = REVIEWS.filter(r => r.landlordId === id)!;
    var totalScore = 0;
    for (var thisReview of landlordReviews) {
      totalScore += thisReview.rating;
    }
    totalScore = totalScore / landlordReviews.length;
    totalScore = Math.ceil(totalScore);
    return of(totalScore);
  }

  getPropertyReviewScore(id: number): Observable<number> {
    const propertyReviews = REVIEWS.filter(r => r.propertyId === id)!;
    var totalScore = 0;
    for (var thisReview of propertyReviews) {
      totalScore += thisReview.rating;
    }
    totalScore = totalScore / propertyReviews.length;
    totalScore = Math.ceil(totalScore);
    return of(totalScore);
  }

  constructor() { }
}
