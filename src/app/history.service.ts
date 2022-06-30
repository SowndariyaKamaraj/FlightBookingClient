import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(
    private servicename : HttpClient
  ) { }

  SearchHistory(params:any):Observable<any>{
    return this.servicename.get('http://localhost:9000/api/History?TicketPNR=' + params.TicketPNR + "&EmailId=" + params.EmailId);
  
  }

  GetTicketHistory(params:any):Observable<any>{

    var token = localStorage.getItem("Token");
    
    const header = new HttpHeaders()
    .set('Authorization', "Bearer " + token);
    return this.servicename.get('http://localhost:9000/api/AllHistory?user=' + params.user );
  }


  BookingHistory(userid:any):any{
    
    var token = localStorage.getItem("Token");
    
    const header = new HttpHeaders()
    .set('Authorization', "Bearer " + token);
     return this.servicename.get('http://localhost:9000/api/ManageHistory?userid=' +userid);
  }

  // BookingHistory(params:any):Observable<any>{
    
  //   var token = localStorage.getItem("Token");
    
  //   const header = new HttpHeaders()
  //   .set('Authorization', "Bearer " + token);
  //    return this.servicename.get('http://localhost:9000/api/ManageHistory?userid=' +params.userid + "&mail=" +params.mail + "&pnr=" +params.pnr);
  // }
  
  SearchManageHistory(params:any):Observable<any>{
    
    var token = localStorage.getItem("Token");
    
    const header = new HttpHeaders()
    .set('Authorization', "Bearer " + token);
    
  return this.servicename.get('http://localhost:9000/api/SearchManageHistory?TicketPNR=' + params.TicketPNR + "&EmailId=" + params.EmailId);
}
}