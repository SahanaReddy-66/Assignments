import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JavaComponent } from './java/java.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesComponent } from './pipes/pipes.component';
import { ApicomponentComponent } from './apicomponent/apicomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { FormarrayComponent } from './formarray/formarray.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DecoratorsComponent } from './decorators/decorators.component';
@NgModule({
  declarations: [
    AppComponent,
    JavaComponent,
    PipesComponent,
    ApicomponentComponent,
    FormarrayComponent,
    DecoratorsComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
