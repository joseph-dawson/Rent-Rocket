import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SavedPropertiesComponent } from '../saved-properties/saved-properties.component';
import { Property } from '../property-service/property';
import { PropertyService } from '../property-service/property.service';
import { Review } from '../review-service/review';
import { ReviewService } from '../review-service/review.service';
import { Landlord } from '../landlord-service/landlord';
import { LandlordService } from '../landlord-service/landlord.service';
import { SearchComponent } from '../search/search.component';
import { SaveServiceService } from '../save-service.service';
import { StarsReviewComponent } from './stars-review/stars-review.component';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  
  property: Property | undefined;
  landlord: Landlord | undefined;
  reviews: Review[] = [];
  landlordScore: number;
  propertyScore: number;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private reviewService: ReviewService,
    private landlordService: LandlordService,
    private location: Location,
    private saveService: SaveServiceService,
    //private starReview: StarsReviewComponent,
  ) {}

  ngOnInit(): void {
    this.getProperty();
    this.getReviews();
    this.getLandlord();
    this.getScores();
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

  getScores(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.reviewService.getPropertyReviewScore(id).subscribe(propertyScore => this.propertyScore = propertyScore);
    if (this.landlord)
      this.reviewService.getLandlordReviewScore(this.landlord.id).subscribe(landlordScore => this.landlordScore = landlordScore);
  }

  //makeStars(num: number): string {
  //  return(this.starReview.htmlStar(num));
  //}

  SaveProperty()
  {
    if(this.property !=null)
    {
    var id: number = this.property.id;
    this.saveService.saveProperty(id)
    }
  }

  
};
