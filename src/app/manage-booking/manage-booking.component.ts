import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AddInventoryService } from '../add-inventory.service';

@Component({
  selector: 'app-manage-booking',
  templateUrl: './manage-booking.component.html',
  styleUrls: ['./manage-booking.component.css']
})
export class ManageBookingComponent implements OnInit {
  cancelform:FormGroup
 
  submitted =false;
  dataSource:any = [];
  EmptyData:any=[];
  constructor(private formBuilder:FormBuilder, private service:AddInventoryService, private router:Router) {


    this.cancelform = this.formBuilder.group({
      
      TicketPNR:[''],
      EmailId:[''],
   
        
    
    });

  }

  ngOnInit(): void {
    this.ManageBooking();
  }


 
 cancelbooking(item:any):any{
 

  
  var params = {
    "EmailId" : item.emailId,
     "ModifiedId" : Number(localStorage.getItem("user")),
     "TicketPNR" : item.ticketPNR,
     "NoofSeatedBooked":item.noofSeatedBooked,
     "Type":item.type,
     "InventoryId":item.inventoryId
   };

    this.service.cancelbooking(params).subscribe((result:any) => {
      
      this.dataSource = result;
     
      alert("Ticket Cancelled Successfully");
 
      this.router.navigate(["ManageBooking"]).then(() => {
        window.location.reload();
      });;
  
    //   this.service.Consumer().subscribe((result:any) => {
      
    //     alert("Ticket Cancelled Successfully");
 
    //     this.router.navigate(["ManageBooking"]).then(() => {
    //       window.location.reload();
    //     });;
    //  },
    //  (error:any) =>{
    //    console.log(error);
    //  }
    //  );
      

    },
    (error:any) =>{
      console.log(error);
    }
    )
    
}

Download(item:any):any{

  
  var params = {
    "EmailId" : item.emailId,
     "ModifiedId" : Number(localStorage.getItem("user")),
     "TicketPNR" : item.ticketPNR
   };

   alert("Downloaded Successfully");

    this.service.Download(params).subscribe((result:any) => {
   
      this.dataSource = result;
     
      alert("Downloaded Successfully");
 
      this.router.navigate(["ManageBooking"]).then(() => {
        window.location.reload();
      });;
  

    },
    (error:any) =>{
      console.log(error);
    }
    )
    
}



ManageBooking():void{
  
 
 this.service.ManageBooking(Number(localStorage.getItem("user"))).subscribe((result:any) => {
   

   if(result.length == 0){
    this.EmptyData= result;
    alert('Please Book your tickets now!')
   }
   else{
    this.dataSource = result;
   }
   
 },
 (error:any) =>{
   console.log(error);
 }
 );
}


}
