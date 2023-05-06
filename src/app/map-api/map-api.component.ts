import { Component, Input } from '@angular/core';
import { PROPERTIES } from '../data/mock-properties';
import { Property } from '../property-service/property';
@Component({
  selector: 'app-maps-api',
  templateUrl: './map-api.component.html',
  styleUrls: ['./map-api.component.css']
})
export class MapAPIComponent {
  constructor() {}
  @Input() filteredProperties : Property[];
  ngOnInit(): void {}

  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 46.891217,
      lng: -96.801877
  };
  zoom = 11;
  
  maple = {lat:46.918355,lng:-96.792087};
  main = {lat:46.940607,lng:-96.795984};
  oak = {lat:46.896867,lng:-96.856775};
  elm = {lat:46.868160,lng:-96.854338};
  oak2 = {lat:46.825935,lng:-96.875889};
  main2 = {lat:46.798522,lng:-96.804256};
  ceder = {lat:46.855995,lng:-96.784101};
  markerPositions: google.maps.LatLngLiteral[] = [this.maple,this.main, this.oak, this.elm, this.oak2, this.main2, this.ceder];

  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  filter()
  {
    this.filteredProperties.forEach(element => {
      this.markerPositions.filter(obj => obj === element.latLng)
    });
  }
}
