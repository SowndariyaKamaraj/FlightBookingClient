import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddAirlineService } from '../add-airline.service';

@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.css']
})
export class AddAirlineComponent implements OnInit {
  
  airlineform: FormGroup;
  submitted =false;
  dataSource:any = [];

  constructor(private formBuilder:FormBuilder, private service:AddAirlineService, private router:Router) {

    this.airlineform = this.formBuilder.group({
    
        AirlineName:[''],  
        ContactNumber:[''],
        ContactAddress:[''],
        UploadLogo:[''],
    
    });


}
ngOnInit(): void {
  this.GetAllAirline();
}

get f()  {return this.airlineform.controls;}

AddAirline()
{
  this.submitted =true;

  if(this.airlineform.invalid){
    return;
  }

  var data = this.airlineform.value;

  data.ModifiedId = Number(localStorage.getItem("user"));

  this.service.AddAirline(this.airlineform.value).subscribe((result:any) => {
    alert("Airline Added Successfully");
    this.router.navigate(["airline"]).then(() => {
      window.location.reload();
    });;
   
  
  },
  (error:any) =>{
    console.log(error);
  }
  )
  
}


GetAllAirline():any{
  this.service.GetAllAirline().subscribe((result:any) => {
    this.dataSource = result;
 },
 (error:any) =>{
   console.log(error);
 }
 );
}


blockAirline(airlineId:any, value:boolean):void{
  

 
   var params = {
    "AirlineId" : airlineId,
     "ModifiedId" : Number(localStorage.getItem("user")),
     "IsActive" : Boolean(value)
   };

  this.service.blockAirline(params).subscribe((result:any) => {
    this.dataSource = result;
    alert("Airline Updated Successfully");

    // this.router.navigate(["search"]).then(() => {
      window.location.reload();
    // });;

  },
  (error:any) =>{
    console.log(error);
  }
  );
}
}
