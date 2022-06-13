import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from '../assets/data.json';
import { ApiserviceService } from './shared/apiservice.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  apiArray:any=[];
  recMessage:any;
  title = 'toaster-not';

  // [x: string]: any;
  // array: any = [];
  // dept: any;
  // coll: any;
  // popular: any;
  constructor(private router: Router,
    private api: ApiserviceService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
   
    // this.array = data;
    // console.log(this.array);
  

//  this.coll = this.array[0].Dept
//  this.popular = this. array[2].popularFor
this.data();
  }
  data() {
    this.api.apiData().subscribe((res: any) => {
      // console.log(res.data)
      this.apiArray=res.data
   
    })
   }
   receiveData(event:any){
    this.recMessage=event
  }
  showToasterSuccess(){
    this.toastr.success("Data shown successfully !!", "Data shown successfully !!" )
  }
   
  showToasterError(){
    this.toastr.error("Something is wrong", "Something is wrong")
  }
   
  showToasterInfo(){
    this.toastr.info("This is info", "This is info")
  }
   
  showToasterWarning(){
    this.toastr.warning("This is warning", "This is warning")
  }
}
