import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { StarsReviewComponent } from './listing/stars-review/stars-review.component';
import { LandlordComponent } from "./landlord/landlord.component"

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    ListingComponent,
    SearchComponent,
    MapAPIComponent,
    GeocoderComponent,
    LoginComponent,
    StarsReviewComponent,
    LandlordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
