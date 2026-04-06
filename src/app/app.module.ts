import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { CartComponent } from './cart/cart.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { HandbagComponent } from './handbag/handbag.component';
import { BooksComponent } from './books/books.component';
import { TechComponent } from './tech/tech.component';
import { SneakersComponent } from './sneakers/sneakers.component';
import { TravelComponent } from './travel/travel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCatalogComponent,
    CartComponent,
    FurnitureComponent,
    HandbagComponent,
    BooksComponent,
    TechComponent,
    SneakersComponent,
    TravelComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
