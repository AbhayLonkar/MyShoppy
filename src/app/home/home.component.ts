import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories: any = [
    {
      id: 1,
      title: "Furniture",
      bg: "assets/category/furniture.png"
    },
    {
      id: 2,
      title: "Hand Bag",
      bg: "assets/category/handbag.png"
    },
    {
      id: 3,
      title: "Books",
      bg: "assets/category/book.png"
    },
    {
      id: 4,
      title: "Tech",
      bg: "assets/category/tech.png"
    },
    {
      id: 5,
      title: "Sneakers",
      bg: "assets/category/sneaker.png"
    },
    {
      id: 6,
      title: "Travel",
      bg: "assets/category/travel.png"
    },
  ]
}
