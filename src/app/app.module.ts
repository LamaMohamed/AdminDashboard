import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { UpdateRestaurantComponent } from './components/update-restaurant/update-restaurant.component';
import { RestaurantsListComponent } from './components/restaurants-list/restaurants-list.component';
import { AddHotelComponent } from './components/add-hotel/add-hotel.component';
import { HotelComponent } from './components/update/hotel/hotel.component';
import { HotelsListComponent } from './components/hotels-list/hotels-list.component';
import { UpdateHotelComponent } from './components/update-hotel/update-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRestaurantComponent,
    UpdateRestaurantComponent,
    RestaurantsListComponent,
    AddHotelComponent,
    HotelComponent,
    HotelsListComponent,
    UpdateHotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
