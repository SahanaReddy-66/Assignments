import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  headers: any;

  constructor(private httpclient: HttpClient) {

  }

// Not working
  postUserDetails(form: any) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });
    // const head = this.getheaders();
    let url = "https://bookcart.azurewebsites.net/api/User";
       return this.httpclient.post(url,header , form);
  }
  // getheaders(){
  //   this.headers = new HttpHeaders();
  //   this.headers.set('Accept', '*/*');
  //   this.headers.set('Content-Type', 'application/json') 
  // }


  // Using Json server
 getUserdata() {
    let url = 'http://localhost:3000/sahana';
    return this.httpclient.get(url)
  }
  postData(form: any){
    let url=' http://localhost:3000/sahana'
    return this.httpclient.post(url, form)
  
  }



  apiData() {
    let url = environment.apiDomain + 'api/users?page=2';
    return this.httpclient.get(url)
  }

  getUserdata2() {
    let url = environment.apiDomain + 'api/users?page=2';
    return this.httpclient.get(url)
  }
}
