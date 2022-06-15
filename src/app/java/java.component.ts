import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.scss']
})
export class JavaComponent implements OnInit {
  title = 'Assignment';
  name:any="sahana reddy";
  money:any=10000000000;
  array:any=[];
  evenarry:any=[];
  oddarray:any=[];
  newArray:any=[];
   arrayOne = [{ name: "rajesh", age: 26, gender: "male" },
{ name: "suresh", age: 32, gender: "male" },
{ name: "vinoth", age: 40, gender: "male" },
{ name: "rita", age: 14, gender: "female" },
{ name: "sushma", age: 23, gender: "female" },
{ name: "sunith", age: 17, gender: "female" },
{ name: "john", age: 32, gender: "male" }]

  valueDate = new Date();
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};  

  constructor() { }

  ngOnInit(): void {
// for (let i = 0; i < this.arrayOne.length; i++) {
//   if((this.arrayOne[i].age>18 )&& (this.arrayOne[i].age<30)){
// this.newArray.push(this.arrayOne[i])
//   }

// console.log(this.newArray)
     //  console.log(this.array)

     
    for (var i = 0; i < 100; i++) {
      if(i%2==0){
        this.evenarry.push( i)
        
      }
      else if (i%2!==0)
      this.oddarray.push(i)
     
  
    }
    console.log( " even number id", this.evenarry)
    console.log( " odd number is", this.oddarray)



    
  }
 

}
