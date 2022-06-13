import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
  
  
  namee:any;
  pass:any;
  constructor( private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  showToasterSuccess(){
    if(this.namee=="sahana" && this.pass=="123"){

 
    this.toastr.success("Login Successfully !!" )
    }
    else{
      this.toastr.warning("Wrong Cresentials, Please try again" )
    }
  }
}
