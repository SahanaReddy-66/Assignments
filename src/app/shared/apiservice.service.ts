import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private httpclient:HttpClient) {

   }
   getUserdata(){
     let url = 'https://reqres.in/' + 'api/users?page=1';
   
     return this.httpclient.get(url ) 
    
   }
   getUserdata2(){
    let url = environment.apiDomain + 'api/users?page=2';
    return this.httpclient.get(url)
  }
random(){
  let url = 'https://developer.o2.cz/mobility/sandbox/api/info';
  return this.httpclient.get(url)
}
}
