import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { ManageDiscountComponent } from './manage-discount/manage-discount.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';


const routes: Routes = [
  {
    path:'home',
    component:LoginComponent
  },
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent

  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'Flightbooking',
    component:FlightBookingComponent
  },
  {
    path:'ManageBooking',
    component:ManageBookingComponent
  },
  {
    path:'airline',
    component:AddAirlineComponent

  },
  {
    path:'addinventory',
    component:AddInventoryComponent

  },
  {
    path:'BookingHistory',
    component:BookingHistoryComponent
  },
  {
    path:'discounts',
    component:ManageDiscountComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
