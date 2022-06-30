import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddInventoryService } from '../add-inventory.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-manage-discount',
  templateUrl: './manage-discount.component.html',
  styleUrls: ['./manage-discount.component.css']
})
export class ManageDiscountComponent implements OnInit {

  
  discountform: FormGroup;
  submitted =false;
  dataSource:any = [];

  constructor(private formBuilder:FormBuilder, private service:AddInventoryService, private router:Router) {

    this.discountform = this.formBuilder.group({
    
      DiscountPercent:[''],  
      DiscountCode:[''],
        
    
    });


}
ngOnInit(): void {
  this.ShowDiscount();
}

get f()  {return this.discountform.controls;}

AddDiscount():any
{


  this.submitted =true;

  if(this.discountform.invalid){
    return;
  }

  var data = this.discountform.value;

  data.ModifiedId = Number(localStorage.getItem("user"));

  this.service.AddDiscount(this.discountform.value).subscribe((result:any) => {

    alert("Discount Added Successfully");
    this.router.navigate(["discount"]).then(() => {
      window.location.reload();
    });;
   
    
  },
  (error:any) =>{
    console.log(error);
  }
  )
}


ShowDiscount():any{
  this.service.ShowDiscount().subscribe((result:any) => {
    this.dataSource = result;
 },
 (error:any) =>{
   console.log(error);
 }
 );
}


}

