import { Component, OnInit } from '@angular/core';

import { Property } from '../property-service/property';
import { PropertyService } from '../property-service/property.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  properties: Property[] = [];

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.getProperties();
  }

  getProperties(): void {
    this.propertyService.getProperties().subscribe(properties => this.properties = properties);
  }
}
