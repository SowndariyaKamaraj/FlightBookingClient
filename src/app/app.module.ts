import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { RegisterComponent } from './register/register.component';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { ManageDiscountComponent } from './manage-discount/manage-discount.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FlightBookingComponent,
    RegisterComponent,
    AddAirlineComponent,
    AddInventoryComponent,
    BookingHistoryComponent,
    ManageDiscountComponent,
    ManageBookingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
