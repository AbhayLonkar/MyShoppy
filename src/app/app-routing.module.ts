import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { HandbagComponent } from './handbag/handbag.component';
import { BooksComponent } from './books/books.component';
import { TechComponent } from './tech/tech.component';
import { SneakersComponent } from './sneakers/sneakers.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "furniture",
    component: FurnitureComponent
  },
  {
    path: "handbag",
    component: HandbagComponent
  },
  {
    path: "books",
    component: BooksComponent
  },
  {
    path: "tech",
    component: TechComponent
  },
  {
    path: "sneakers",
    component: SneakersComponent
  },
  {
    path: "travel",
    component: TravelComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
