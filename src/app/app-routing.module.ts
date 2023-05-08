import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListingComponent } from './listing/listing.component';
import { SearchComponent } from './search/search.component';
import { LandlordComponent } from './landlord/landlord.component';
import { LoginComponent } from './login/login.component';
import { SavedPropertiesComponent } from './saved-properties/saved-properties.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'listing', component: ListingComponent },
  { path: 'listing/:id', component: ListingComponent },
  { path: 'search', component: SearchComponent },
  { path: 'landlord', component: LandlordComponent },
  { path: 'landlord/:id', component: LandlordComponent },
  { path: 'login', component: LoginComponent},
  { path: 'saved', component:SavedPropertiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
