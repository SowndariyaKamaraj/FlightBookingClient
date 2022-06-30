import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted =false;

  constructor(private formBuilder:FormBuilder, private service:RegisterService, private router:Router) {

    this.registerForm = this.formBuilder.group({
    
    UserName:[''],
    Password:[''],
    EmailId:[''],
    Role:[''],
    Gender:[''],
    Age:[''],
    MobileNumber:['']

    
    });

}  
ngOnInit(): void {
  
}

get f()  {return this.registerForm.controls;}

REGISTER()
{
  this.submitted =true;

  if(this.registerForm.invalid){
    return;
  }

  this.service.REGISTER(this.registerForm.value).subscribe((result) => {
    
    // this.router.navigate(["server"]);
    alert("REGISTRATION SUCCESSFULLY! Please Login to Book Tickets")
    this.router.navigate(["home"]);
  },
  (error) =>{
    console.log(error);
  }
  )
  
}



}
