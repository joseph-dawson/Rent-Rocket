import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Property } from '../data/property-service/property';
import { PropertyService } from '../data/property-service/property.service';
import { Review } from '../data/review-service/review';
import { ReviewService } from '../data/review-service/review.service';
import { Landlord } from '../data/landlord-service/landlord';
import { LandlordService } from '../data/landlord-service/landlord.service';

@Component({
  selector: 'app-landlord',
  templateUrl: './landlord.component.html',
  styleUrls: ['./landlord.component.css']
})
export class LandlordComponent {
  property: Property | undefined;
  landlord: Landlord | undefined;
  reviews: Review[] = [];
  score: number;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private reviewService: ReviewService,
    private landlordService: LandlordService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getLandlord();
    this.getReviews();
    this.getScores();
  }

  getLandlord(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.landlordService.getLandlord(id).subscribe(landlord => this.landlord = landlord);
  }

  getReviews(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.reviewService.getLandlordReviews(id).subscribe(reviews => this.reviews = reviews);
  }

  getScores(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.reviewService.getLandlordReviewScore(id).subscribe(score => this.score = score);
  }
}
