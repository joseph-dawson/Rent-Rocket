import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Landlord } from './landlord';
import { LANDLORDS } from '../data/mock-landlords';

@Injectable({
  providedIn: 'root'
})
export class LandlordService {

  getLandlords(): Observable<Landlord[]> {
    const landlords = of(LANDLORDS);
    return landlords;
  }

  getLandlord(id: number): Observable<Landlord> {
    const landlord = LANDLORDS.find(l => l.id === id)!;
    return of(landlord);
  }

  constructor() { }
}
