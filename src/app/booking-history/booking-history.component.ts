import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  historyform: FormGroup;

  submitted =false;
  dataSource:any = [];
  

  constructor(private formBuilder:FormBuilder, private service:HistoryService, private router:Router) {

   var user =Number(localStorage.getItem("user"));
  this.historyform = this.formBuilder.group({
      
    TicketPNR:[''],
    EmailId:[''],
 
      
  
  });


 

}  

ngOnInit(): void {
  this.BookingHistory();
}

SearchHistory():any{
  this.submitted =true;
  
    if(this.historyform.invalid){
      return;
    }
    
    this.service.SearchManageHistory(this.historyform.value).subscribe((result:any) => {
      this.dataSource = result;
     
            // this.router.navigate(["addinventory"]);

    },
    (error:any) =>{
      console.log(error);
    }
    )
    
}

// GetTicketHistory():any{
//   this.service.GetTicketHistory(Number(localStorage.getItem("user"))).subscribe((result:any) => {
//     this.dataSource = result;
//  },
//  (error:any) =>{
//    console.log(error);
//  }
//  );
// }


BookingHistory():void{
  
 
  this.service.BookingHistory(Number(localStorage.getItem("user"))).subscribe((result:any) => {
    this.dataSource = result;
    
  },
  (error:any) =>{
    console.log(error);
  }
  );
 }

 getclear():void{
  window.location.reload();
 }

 
 }
