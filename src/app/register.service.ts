import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private servicename : HttpClient
  ) { }

  REGISTER(params:any):Observable<any>{
    
    return this.servicename.post('http://localhost:9000/api/Register', params);
  }
  

}
