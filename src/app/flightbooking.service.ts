import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightbookingService {
  constructor(
    private servicename : HttpClient
  ) { }

  TicketBooking(params:any):Observable<any>{
    
    var token = localStorage.getItem("Token");
    
    const header = new HttpHeaders()
    .set('Authorization', "Bearer " + token);
    return this.servicename.post('http://localhost:9000/api/Ticket', params);
  }

  GetAllInventory():any{
    
    var token = localStorage.getItem("Token");
    
    const header = new HttpHeaders()
    .set('Authorization', "Bearer " + token);
    return this.servicename.get('http://localhost:9000/api/AllInventory',{ 'headers': header});


  }

  
  SearchFlight(params:any):Observable<any>{
    return this.servicename.get('http://localhost:9000/api/SearchFlight?Source=' + params.Source + "&Destination=" + params.Destination);
  
    // return this.servicename.get('http://localhost:9000/api/History', params);
  }



  // Consumer():any{
    
  //   var token = localStorage.getItem("Token");
    
  //   const header = new HttpHeaders()
  //   .set('Authorization', "Bearer " + token);
  //   return this.servicename.get('http://localhost:9000/api/Consumer');
  // }

}
