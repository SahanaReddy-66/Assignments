import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JavaComponent } from './java/java.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesComponent } from './pipes/pipes.component';
import { ApicomponentComponent } from './apicomponent/apicomponent.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormarrayComponent } from './formarray/formarray.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DecoratorsComponent } from './decorators/decorators.component';
import { GridComponent } from './grid/grid.component';
import { AuthhInterceptor } from './authh.interceptor';
import { AgGridModule } from 'ag-grid-angular';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    JavaComponent,
    PipesComponent,
    ApicomponentComponent,
    FormarrayComponent,
    DecoratorsComponent,
    GridComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AgGridModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthhInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
