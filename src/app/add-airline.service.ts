import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddAirlineService {

  constructor(
    private servicename : HttpClient
  ) { }

  
  AddAirline(params:any):any{
    
    var token = localStorage.getItem("Token");
    
    const header = new HttpHeaders()
    .set('Authorization', "Bearer " + token);
    return this.servicename.post('http://localhost:9000/api/AddAirline', params,{ 'headers': header});


  }

  GetAllAirline():any{
    
    var token = localStorage.getItem("Token");
    
    const header = new HttpHeaders()
    .set('Authorization', "Bearer " + token);
    return this.servicename.get('http://localhost:9000/api/AllAirline',{ 'headers': header});


  }

  blockAirline(parans:any):any{
    
    var token = localStorage.getItem("Token");
    
    const header = new HttpHeaders()
    .set('Authorization', "Bearer " + token);
    return this.servicename.post('http://localhost:9000/api/BlockAirline', parans,{ 'headers': header});


  }
}