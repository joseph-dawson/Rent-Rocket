import { Component } from '@angular/core';

import { Property } from '../../property-service/property';
import { PropertyService } from '../../property-service/property.service';
import { Review } from '../../review-service/review';
import { ReviewService } from '../../review-service/review.service';
import { Landlord } from '../../landlord-service/landlord';
import { LandlordService } from '../../landlord-service/landlord.service';
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
