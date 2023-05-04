import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListingComponent } from './listing/listing.component';
import { SearchComponent } from './search/search.component';
import { MapAPIComponent } from './map-api/map-api.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GeocoderComponent } from './geocoder/geocoder.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    ListingComponent,
    SearchComponent,
    MapAPIComponent,
    GeocoderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
