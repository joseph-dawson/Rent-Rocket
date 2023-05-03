import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Review } from './review';
import { REVIEWS } from '../data/mock-reviews';

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

  constructor() { }
}
