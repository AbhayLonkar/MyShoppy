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
      bg: "assets/category/furniture.png",
      link: "/furniture"
    },
    {
      id: 2,
      title: "Hand Bag",
      bg: "assets/category/handbag.png",
      link: "/handbag"

    },
    {
      id: 3,
      title: "Books",
      bg: "assets/category/book.png",
      link: '/books'
    },
    {
      id: 4,
      title: "Tech",
      bg: "assets/category/tech.png",
      link: '/tech'
    },
    {
      id: 5,
      title: "Sneakers",
      bg: "assets/category/sneaker.png",
      link: '/sneakers'
    },
    {
      id: 6,
      title: "Travel",
      bg: "assets/category/travel.png",
      link: '/travel'
    },
  ]
}
