import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../shared/apiservice.service';

@Component({
  selector: 'app-apicomponent',
  templateUrl: './apicomponent.component.html',
  styleUrls: ['./apicomponent.component.scss']
})
export class ApicomponentComponent implements OnInit {
arrayOne:any=[];
arrayTwo:any=[];
  constructor(private api:ApiserviceService) { }

  ngOnInit(): void {
    this.userDetails();
    this.userDetails2();
  this.random();
  }
userDetails(){
  this.api.getUserdata().subscribe((response:any)=>{
    // console.log(response);
    // console.log(response.data);
    this.arrayOne=response.data;
    console.log(this.arrayOne)
  })
}
userDetails2(){
  this.api.getUserdata2().subscribe((response:any)=>{
    // console.log(response);
    // console.log(response.data);
    this.arrayTwo=response.data;
    console.log(this.arrayTwo);
  })
}
random(){
  this.api.random().subscribe((response:any)=>{
    console.log(response)
  })
}
}
