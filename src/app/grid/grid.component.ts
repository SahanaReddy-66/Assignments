import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { ApiserviceService } from '../shared/apiservice.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  array:any=[];
  searchValue:any
  columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'email' },
    { field: 'first_name' },
    { field: 'last_name' },
    { field: 'avatar' }

];
defaultColDef= {
  sortable: true,
  filter: true,
};

@ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  constructor(private http: HttpClient,
    private api: ApiserviceService) { }

 

  rowData = [];


  ngOnInit(): void {
    fetch('https://reqres.in/api/users?page=2')
    .then(result => result.json())
    .then(rowData => this.rowData = rowData.data);
  }
  Change(){
    this.agGrid.api.setQuickFilter(this.searchValue);
  }
 
}
