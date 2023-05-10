import { Component } from '@angular/core';
import { Property } from '../data/property-service/property';
import { SaveServiceService } from '../save-service.service';

@Component({
  selector: 'app-saved-properties',
  templateUrl: './saved-properties.component.html',
  styleUrls: ['./saved-properties.component.css']
})
export class SavedPropertiesComponent {
constructor(private saveService : SaveServiceService){}
  savedProperties: Property[] = []

  addToSaved()
  {
    const id : number = 0;
    this.savedProperties.push(this.saveService.saveProperty(id))
  }
}
