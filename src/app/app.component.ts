import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // [x: string]: any;
  // array: any = [];
  // dept: any;
  // coll: any;
  // popular: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
   
    // this.array = data;
    // console.log(this.array);
  

//  this.coll = this.array[0].Dept
//  this.popular = this. array[2].popularFor
  
  }


}
