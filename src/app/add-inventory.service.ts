import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddInventoryService {

  constructor(
    private servicename : HttpClient
  ) { }

  ManageAirline(params:any):any{
    
    var token = localStorage.getItem("Token");
    
    const header = new HttpHeaders()
    .set('Authorization', "Bearer " + token);
    return this.servicename.post('http://localhost:9000/api/AddInventory', params,{ 'headers': header});


  }

  GetAllInventory():any{
    
    var token = localStorage.getItem("Token");
    
    const header = new HttpHeaders()
    .set('Authorization', "Bearer " + token);
    return this.servicename.get('http://localhost:9000/api/AllInventory',{ 'headers': header});


  }


  AddDiscount(params:any):any{
    
    var token = localStorage.getItem("Token");
    
    const header = new HttpHeaders()
    .set('Authorization', "Bearer " + token);
    return this.servicename.post('http://localhost:9000/api/AddDiscount', params,{ 'headers': header});


  }

  ShowDiscount(){
    
    var token = localStorage.getItem("Token");
    
    const header = new HttpHeaders()
    .set('Authorization', "Bearer " + token);
    return this.servicename.get('http://localhost:9000/api/ShowDiscount', { 'headers': header});


  }
  

  ManageBooking(userid:any):any{
    
    var token = localStorage.getItem("Token");
    
    const header = new HttpHeaders()
    .set('Authorization', "Bearer " + token);
    return this.servicename.get('http://localhost:9000/api/ManageBooking?userid=' +userid);
    
  }


  
  
  cancelbooking(params:any):any{

    var token = localStorage.getItem("Token");
    
    const header = new HttpHeaders()
    .set('Authorization', "Bearer " + token);
    return this.servicename.post('http://localhost:9000/api/Cancel',params);
    
   }

   Download(params:any):any{
    var token = localStorage.getItem("Token");
    
    const header = new HttpHeaders()
    .set('Authorization', "Bearer " + token);
    return this.servicename.post('http://localhost:9000/api/DownloadTicket?' ,params);
    
   }

    Consumer():any{
    
    var token = localStorage.getItem("Token");
    
    const header = new HttpHeaders()
    .set('Authorization', "Bearer " + token);
    return this.servicename.get('http://localhost:9000/api/Consumer');
  }
}
