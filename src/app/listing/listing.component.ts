import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Property } from '../property';
import { PropertyService } from '../property.service';
import { Review } from '../review';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  
  property: Property | undefined;
  reviews: Review[] = [];

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private reviewService: ReviewService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProperty();
    this.getReviews();
  }

  getProperty(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.propertyService.getProperty(id).subscribe(property => this.property = property);
  }

  getReviews(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.reviewService.getPropertyReviews(id).subscribe(reviews => this.reviews = reviews);
  }

};
