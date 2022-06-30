import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddInventoryService } from '../add-inventory.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {

  inventoryform: FormGroup;
  submitted =false;
  dataSource:any = [];

  constructor(private formBuilder:FormBuilder, private service:AddInventoryService, private router:Router,) {

    this.inventoryform = this.formBuilder.group({
    
       
      AirlineId:[''],
        FromPlace:[''],
        ToPlace:[''],
        StartDate:[''],
        EndDate:[''],
        Total_BusinessClass_Seat:[''],
        Total_NonBusinessClass_Seat:[''],
        InstrumentUsed:[''],
        TicketCost:[''],
        // Meal:[''],

    });

}

ngOnInit(): void {
    this.getAllInventory();
}

get f()  {return this.inventoryform.controls;}

ManageAirline()
{
  this.submitted =true;

  if(this.inventoryform.invalid){
    return;
  }

  var data = this.inventoryform.value;

  data.ModifieduserId = Number(localStorage.getItem("user"));

  this.service.ManageAirline(this.inventoryform.value).subscribe((result:any) => {

    alert("Inventory Added Successfully");
    this.router.navigate(["addinventory"]).then(() => {
      window.location.reload();
    });;
   
    
  },
  (error:any) =>{
    console.log(error);
  }
  )
}

getAllInventory():any{
  this.service.GetAllInventory().subscribe((result:any) => {
    this.dataSource = result;
 },
 (error:any) =>{
   console.log(error);
 }
 );
}


}