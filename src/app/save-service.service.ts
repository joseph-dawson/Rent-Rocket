import { Injectable } from '@angular/core';
import { Property } from './data/property-service/property';
import { Observable, of } from 'rxjs';
import { PROPERTIES } from './data/mock-properties';

@Injectable({
  providedIn: 'root'
})
export class SaveServiceService {

  constructor() { }

  saveProperty(id:number)
  {
    const property = PROPERTIES.find(p => p.id === id)!;
    return property;
  }
}
