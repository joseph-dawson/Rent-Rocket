import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Property } from '../property-service/property';
import { PropertyService } from '../property-service/property.service';
import { Review } from '../review-service/review';
import { ReviewService } from '../review-service/review.service';
import { Landlord } from '../landlord-service/landlord';
import { LandlordService } from '../landlord-service/landlord.service';

@Component({
  selector: 'app-landlord',
  templateUrl: './landlord.component.html',
  styleUrls: ['./landlord.component.css']
})
export class LandlordComponent {
  property: Property | undefined;
  landlord: Landlord | undefined;
  reviews: Review[] = [];

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
  }

  getLandlord(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.landlordService.getLandlord(id).subscribe(landlord => this.landlord = landlord);
  }

  getReviews(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.reviewService.getLandlordReviews(id).subscribe(reviews => this.reviews = reviews);
  }
}
