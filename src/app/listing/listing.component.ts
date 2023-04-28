import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Property } from '../property';
import { PropertyService } from '../property.service';
import { Review } from '../review';
import { ReviewService } from '../review.service';
import { Landlord } from '../landlord';
import { LandlordService } from '../landlord.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  
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
    this.getProperty();
    this.getReviews();
    this.getLandlord();
  }

  getProperty(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.propertyService.getProperty(id).subscribe(property => this.property = property);
  }

  getReviews(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.reviewService.getPropertyReviews(id).subscribe(reviews => this.reviews = reviews);
  }

  getLandlord(): void {
    if (this.property)
      this.landlordService.getLandlord(this.property.landlordId).subscribe(landlord => this.landlord = landlord);
  }

};
