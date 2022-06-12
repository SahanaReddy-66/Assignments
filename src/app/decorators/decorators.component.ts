import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.scss']
})
export class DecoratorsComponent implements OnInit {
  @Input() apiMessage: any;
  show:boolean=true
  @Output() messageEvent=new EventEmitter<any>();
  data:any
  constructor() { }

  ngOnInit(): void {
  }
  sendData(){
    this.messageEvent.emit(this.apiMessage)
  
 
    }
    hideData(){
      this.messageEvent.emit( null)
     
    }
}
