import { AddCruiseComponent } from './components/add-cruise/add-cruise.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHotelComponent } from './components/add-hotel/add-hotel.component';
import {AddRestaurantComponent} from './components/add-restaurant/add-restaurant.component'
import { HotelsListComponent } from './components/hotels-list/hotels-list.component';
import { RestaurantsListComponent } from './components/restaurants-list/restaurants-list.component';
import { UpdateHotelComponent } from './components/update-hotel/update-hotel.component';
import{CruiseListComponent} from './components/cruise-list/cruise-list.component'
import { UpdateRestaurantComponent } from './components/update-restaurant/update-restaurant.component';

/// auth
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UpdateCruiseComponent } from './components/update-cruise/update-cruise.component';

const routes: Routes = [

  { path: 'login',component: LoginComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '',component: HomeComponent, canActivate: [AuthGuard] ,
  children: [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'add-restaurant', component: AddRestaurantComponent },
  { path: 'update-restaurant/:id', component: UpdateRestaurantComponent },
  { path: 'restaurant-list', component: RestaurantsListComponent },
  { path: 'add-hotel', component: AddHotelComponent },
  { path: 'update-hotel/:id', component: UpdateHotelComponent },
  { path: 'hotel-list', component: HotelsListComponent },
  { path: 'cruise-list', component: CruiseListComponent },
  {path:  'add-cruise',component:AddCruiseComponent},
  {path:  'update-cruise/:id',component:UpdateCruiseComponent},
  { path: 'user-list', component: UsersListComponent },
  ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
