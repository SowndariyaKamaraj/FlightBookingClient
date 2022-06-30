import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightbookingService } from '../flightbooking.service';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent implements OnInit {
  searchform: FormGroup;
  Bookingform: FormGroup;
  submitted =false;
  dataSource:any = [];
  IsShowModalPopup:boolean = false;
  _selectedItem:any;
  

  constructor(private formBuilder:FormBuilder, private service:FlightbookingService, private router:Router) {

    this.Bookingform = this.formBuilder.group({
    
      InventoryId:[''],
      EmailId:[''],
      OptMeal:[''],
      Rountrip:[''],
      NoofSeatedBooked:[''],
      SeatNumbers:[''],  
      Type:[''],
      ModifiedId:[''],
      DiscountCode:[''],
      Cost:['']
    
    });

    this.searchform = this.formBuilder.group({
      
      Source:[''],  
      Destination:[''],
        
    
    });

  }

  ngOnInit(): void {
     this.getAllInventory()
  }

  get f()  {return this.Bookingform.controls;}

  SearchFlight()
  {
    this.submitted =true;
  
    if(this.searchform.invalid){
      return;
    }
  

    this.service.SearchFlight(this.searchform.value).subscribe((result:any) => {
      this.dataSource = result;
            // this.router.navigate(["addinventory"]);
    },
    (error:any) =>{
      console.log(error);
    }
    )
    

  
  }


  TicketBooking()
  {
    this.submitted =true;
  
    if(this.Bookingform.invalid){
      return;
    }

    var userIted = Number(localStorage.getItem("user"));

    this.Bookingform.controls["InventoryId"].setValue(this._selectedItem.inventoryId);
    this.Bookingform.controls["ModifiedId"].setValue(userIted);
    this.Bookingform.controls["Cost"].setValue(this._selectedItem.ticketCost);
  
  this.service.TicketBooking(this.Bookingform.value).subscribe((result) => 
  {    
    
    this.IsShowModalPopup = false;
     this.router.navigate(["ManageBooking"]).then(() => {
  
      alert("Ticket Booked Successfully");
     });; 
    
    
  //     this.service.Consumer().subscribe((result:any) => {
      
  //       this.IsShowModalPopup = false;
  //       this.router.navigate(["ManageBooking"]).then(() => {
     
  //        alert("Ticket Booked Successfully");
  //       });; 
  //  },
  //  (error:any) =>{
  //    console.log(error);
  //  }
  //  );


  },
  (error) =>{
    console.log(error);
  }
  )
}


getAllInventory():any{
  this.service.GetAllInventory().subscribe((result:any) => {
  // if( result.isActive == 'true'){

    this.dataSource = result;
   //}
 },
 (error:any) =>{
   console.log(error);
 }
 );
}

onBookTicket(selectedItem:any):void{
  this.IsShowModalPopup = true;
  this._selectedItem = selectedItem;
}



}