import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterComponent } from './register/register.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { CardViewComponent } from './card-view/card-view.component';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
const myRoute:Routes=[
 {
  path:"",
  component:AdminLoginComponent
 },
 {
  path:"user",
  component:UserLoginComponent
 },
 {
  path:"register",
  component:RegisterComponent
 },
 {
  path:"add",
  component:AddProductComponent
 },
 {
  path:"search",
  component:SearchComponent
 },
 {
  path:"view",
  component:ViewAllComponent
 },
 {
  path:"card",
  component:CardViewComponent
 }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    RegisterComponent,
    AddProductComponent,
    ViewAllComponent,
    CardViewComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
