import { Component } from '@angular/core';
import { Property } from '../property-service/property';

@Component({
  selector: 'app-saved-properties',
  templateUrl: './saved-properties.component.html',
  styleUrls: ['./saved-properties.component.css']
})
export class SavedPropertiesComponent {

  savedProperties: Property[] = []

  addToSaved()
  {
    //var property : Property ;
    
    //this.savedProperties.push(property)
  }
}
