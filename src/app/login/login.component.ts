import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  registerForm: FormGroup;
  submitted =false;

  constructor(private formBuilder:FormBuilder, private service:ServiceService, private router:Router) {

    this.registerForm = this.formBuilder.group({
    
      username:[''],
      
      password:['']
    });

 
}
  ngOnInit(): void {
    
  }

  get f()  {return this.registerForm.controls;}
  
  Login()
  {
    this.submitted =true;

    if(this.registerForm.invalid){
      return;
    }

    this.service.Login(this.registerForm.value).subscribe((result) => {
      
       if(result.hasOwnProperty("token"))
       {
         localStorage.setItem("Token", result.token);
       }

       if(result.hasOwnProperty("role") && result.role === "Admin")
       {
            this.router.navigate(["airline"]).then(() => {
              window.location.reload();
            });
       }
       if(result.hasOwnProperty("user") )
       {
            localStorage.setItem("user",result.user)
       }

       if(result.hasOwnProperty("role") )
       {
            localStorage.setItem("role",result.role)
       }

       if(result.hasOwnProperty("userName") )
       {
            localStorage.setItem("userName",result.userName)
       }
       if(result.hasOwnProperty("role") && result.role === "User") 
       {
        this.router.navigate(["Flightbooking"]).then(() => {
          window.location.reload();
        });;
       }
    },
    (error) =>{
      alert('Invalid Password/UserName')
     
    }
    )
    
  }

  // callAirlineService():void{
  //   this.service.GetAirlineDetails({ TicketPNR : "32323", EmailId : "4343" }).subscribe((result) => {
      
  //     if(result.hasOwnProperty("token"))
  //     {
  //       localStorage.setItem("Token", result.token);
  //     }
  //  },
  //  (error) =>{
  //    console.log(error);
  //  }
  //  );
  // }

  onReset(){
    this.submitted=false;
    this.registerForm.reset();
  }

  RegisterNavigate(){
    this.router.navigate(["register"]);
  }
}
