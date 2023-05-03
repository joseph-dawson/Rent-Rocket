import { Component } from '@angular/core';

@Component({
  selector: 'app-maps-api',
  templateUrl: './map-api.component.html',
  styleUrls: ['./map-api.component.css']
})
export class MapAPIComponent {
  constructor() {}
      
  ngOnInit(): void {}

  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 46.891217,
      lng: -96.801877
  };
  zoom = 11;
  marker1 = {lat:23,lng:12};
  markerPositions: google.maps.LatLngLiteral[] = [this.marker1];

  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  addMarker(location: google.maps.LatLngLiteral) {
    this.markerPositions.push(location);
}
}
