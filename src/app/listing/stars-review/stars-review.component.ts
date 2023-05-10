import { Component } from '@angular/core';

import { Property } from '../../data/property-service/property';
import { PropertyService } from '../../data/property-service/property.service';
import { Review } from '../../data/review-service/review';
import { ReviewService } from '../../data/review-service/review.service';
import { Landlord } from '../../data/landlord-service/landlord';
import { LandlordService } from '../../data/landlord-service/landlord.service';
import { SearchComponent } from '../../search/search.component';

@Component({
  selector: 'app-stars-review',
  templateUrl: './stars-review.component.html',
  styleUrls: ['./stars-review.component.css']
})
export class StarsReviewComponent {
  
  htmlStar(rating: number): string {

    const fullStar = '<span class="fa fa-star checked"></span>';
    const emptyStar = '<span class="fa fa-star"></span>';
    let carryover = 0;
    let stars = '';

    for (let i = rating; i > 0; i--) {
      stars += fullStar;
        carryover += 1; 
      }

    carryover = 5 - carryover;

    for (let i = carryover; i > 0; i-- ) {
        stars += emptyStar; 
      }
    return(stars);
    }

    
}
