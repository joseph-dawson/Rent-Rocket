import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Property } from './property';
import { PROPERTIES } from '../mock-properties';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  getProperties(): Observable<Property[]> {
    const properties = of(PROPERTIES);
    return properties;
  }

  getProperty(id: number): Observable<Property> {
    const property = PROPERTIES.find(p => p.id === id)!;
    return of(property);
  }

  constructor() { }
}
