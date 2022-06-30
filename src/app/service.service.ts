import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // REGISTER(value: any) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(
    private servicename : HttpClient
  ) { }

  GetAirlineDetails(params:any):Observable<any>
  {
    var token = localStorage.getItem("Token");
    
    const header = new HttpHeaders()
    .set('Authorization', "Bearer " + token);

    return this.servicename.get('http://localhost:9000/api/History?TicketPNR=' + params.TicketPNR + "&EmailId=" + params.EmailId, { 'headers': header});
  }

  Login(params:any):Observable<any>{
    
    return this.servicename.post('http://localhost:9000/api/Login', params);
  }

  
}

