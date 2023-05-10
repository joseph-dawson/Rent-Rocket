import { Component } from '@angular/core';

import { Property } from '../data/property-service/property';
import { PropertyService } from '../data/property-service/property.service';

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
    this.getProperties();
    this.filtered = false;
    if(this.numBeds !=0 && this.numBeds != null) 
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

    if(this.numBaths !=0 && this.numBaths != null)
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

    if(this.sqFeet !=0 && this.sqFeet != null)
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

    if(this.numBaths==0 && this.numBeds==0 && this.sqFeet==0)
    {
      this.getProperties()
      this.filtered = false;
    }
    
  }
}
