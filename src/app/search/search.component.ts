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
  numBeds : number;
  numBaths : number;
  sqFeet :number;
  filteredProperties : Property[] = [];
  filtered :boolean = false;
  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.getProperties();
  }

  getProperties(): void {
    this.propertyService.getProperties().subscribe(properties => this.properties = properties);
  }
  Filter()
  {
    if(this.numBeds !=0)
    {
      if (this.filtered == false)
      {
      this.filteredProperties = this.properties.filter(obj => {
      return obj.numBeds >= this.numBeds});
      }
      else 
      {
        this.filteredProperties = this.filteredProperties.filter(obj => {
          return obj.numBeds >= this.numBeds});
      }
      this.filtered = true;
    }
    if(this.numBaths !=0)
    {
      if (this.filtered == false)
      {
      this.filteredProperties = this.properties.filter(obj => {
      return obj.numBaths >= this.numBaths});
      }
      else 
      {
        this.filteredProperties = this.filteredProperties.filter(obj => {
          return obj.numBaths >= this.numBaths});
      }
      this.filtered = true;
    }
    if(this.sqFeet !=0)
    {
      if (this.filtered == false)
      {
      this.filteredProperties = this.properties.filter(obj => {
      return obj.sqFootage >= this.sqFeet});
      }
      else 
      {
        this.filteredProperties = this.filteredProperties.filter(obj => {
          return obj.sqFootage >= this.sqFeet});
      }
      this.filtered = true;
    }
    
  }
}
