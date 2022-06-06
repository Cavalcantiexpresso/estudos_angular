
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './viens/home/home.component';
import{ ProductCrudComponent} from './viens/product-crud/product-crud.component';



const routes: Routes = [{
  path: "",
  component: HomeComponent
  },
  
  {
  path: "/products",
  component: ProductCrudComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
