import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHotelComponent } from './components/add-hotel/add-hotel.component';
import {AddRestaurantComponent} from './components/add-restaurant/add-restaurant.component'
import { HotelsListComponent } from './components/hotels-list/hotels-list.component';
import { RestaurantsListComponent } from './components/restaurants-list/restaurants-list.component';
import { UpdateHotelComponent } from './components/update-hotel/update-hotel.component';
import { UpdateRestaurantComponent } from './components/update-restaurant/update-restaurant.component';
import { AppComponent } from './app.component';

/// auth
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [

  { path: 'login',component: LoginComponent},
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'add-restaurant', component: AddRestaurantComponent, canActivate: [AuthGuard] },
  { path: 'update-restaurant/:id', component: UpdateRestaurantComponent,canActivate: [AuthGuard,] },
  { path: 'restaurant-list', component: RestaurantsListComponent,canActivate: [AuthGuard,] },
  { path: 'add-hotel', component: AddHotelComponent,canActivate: [AuthGuard,] },
  { path: 'update-hotel/:id', component: UpdateHotelComponent,canActivate: [AuthGuard,] },
  { path: 'hotel-list', component: HotelsListComponent,canActivate: [AuthGuard,] }
  ]
 

 /*  {path: '', canActivate: [AuthGuard,],
  children: [
  { path: 'login',component: LoginComponent},
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'add-restaurant', component: AddRestaurantComponent },
  { path: 'update-restaurant/:id', component: UpdateRestaurantComponent },
  { path: 'restaurant-list', component: RestaurantsListComponent },
  { path: 'add-hotel', component: AddHotelComponent },
  { path: 'update-hotel/:id', component: UpdateHotelComponent },
  { path: 'hotel-list', component: HotelsListComponent }
  ]
  }]; */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
