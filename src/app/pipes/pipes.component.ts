import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  title = 'Assignment';
  name:any="sahana reddy";
  money:any=10000000000;
  valueDate = new Date();
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};  
  constructor() { }

  ngOnInit(): void {
  }

}
