import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApicomponentComponent } from './apicomponent/apicomponent.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { GridComponent } from './grid/grid.component';
import { JavaComponent } from './java/java.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {path:'pipes', component:PipesComponent},
  {path:'java', component:JavaComponent},
  {path:'apipractice', component:ApicomponentComponent},
  {path:'formarray', component:FormarrayComponent},
  {path:'grid', component:GridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
