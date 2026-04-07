import { Injectable } from '@angular/core';

interface Product {
  id: string;
  name: string;
  price: number;
  seller: string;
  path: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  data: Product[] = [
    // ---------------- FURNITURE ----------------
    { id: "FR001", name: "Modern Wooden Chair", price: 2499, seller: "Urban Furnish", path: "assets/furniture/furniture1.png", category: "furniture" },
    { id: "FR002", name: "Comfort Sofa Set", price: 15999, seller: "HomeStyle", path: "assets/furniture/furniture2.png", category: "furniture" },
    { id: "FR003", name: "Glass Coffee Table", price: 4999, seller: "DecorHub", path: "assets/furniture/furniture3.png", category: "furniture" },
    { id: "FR004", name: "Wooden Dining Table", price: 12999, seller: "FurniWorld", path: "assets/furniture/furniture4.png", category: "furniture" },
    { id: "FR005", name: "Office Ergonomic Chair", price: 6999, seller: "WorkEase", path: "assets/furniture/furniture5.png", category: "furniture" },

    // ---------------- HANDBAGS ----------------
    { id: "HB001", name: "Classic Leather Handbag", price: 2499, seller: "StyleCraft", path: "assets/handbag/handbag1.png", category: "handbag" },
    { id: "HB002", name: "Elegant Tote Bag", price: 1899, seller: "Urban Bags", path: "assets/handbag/handbag2.png", category: "handbag" },
    { id: "HB003", name: "Designer Sling Bag", price: 1599, seller: "Fashion Hub", path: "assets/handbag/handbag3.png", category: "handbag" },
    { id: "HB004", name: "Luxury Shoulder Bag", price: 3499, seller: "Elite Accessories", path: "assets/handbag/handbag4.png", category: "handbag" },
    { id: "HB005", name: "Mini Crossbody Bag", price: 1299, seller: "Trendy Picks", path: "assets/handbag/handbag5.png", category: "handbag" },

    // ---------------- BOOKS ----------------
    { id: "BK001", name: "The Alchemist", price: 399, seller: "BookWorld", path: "assets/books/book1.png", category: "books" },
    { id: "BK002", name: "Rich Dad Poor Dad", price: 499, seller: "FinanceReads", path: "assets/books/book3.png", category: "books" },
    { id: "BK003", name: "Atomic Habits", price: 599, seller: "SelfHelp Store", path: "assets/books/book2.png", category: "books" },
    { id: "BK004", name: "Think and Grow Rich", price: 349, seller: "Success Library", path: "assets/books/book5.png", category: "books" },
    { id: "BK005", name: "The Psychology of Money", price: 449, seller: "MoneyReads", path: "assets/books/book4.png", category: "books" },

    // ---------------- TECH ----------------
    { id: "TC001", name: "Wireless Bluetooth Headphones", price: 2999, seller: "TechZone", path: "assets/tech/headphone1.png", category: "tech" },
    { id: "TC002", name: "Smartphone 5G", price: 15999, seller: "MobileHub", path: "assets/tech/headphone2.png", category: "tech" },
    { id: "TC003", name: "Gaming Laptop", price: 74999, seller: "EliteTech", path: "assets/tech/headphone3.png", category: "tech" },
    { id: "TC004", name: "Wireless Mouse", price: 799, seller: "ClickStore", path: "assets/tech/headphone4.png", category: "tech" },
    { id: "TC005", name: "Mechanical Keyboard", price: 3499, seller: "KeyPro", path: "assets/tech/headphone5.png", category: "tech" },

    // ---------------- SNEAKERS ----------------
    { id: "SN001", name: "Running Sports Sneakers", price: 2999, seller: "Sportify", path: "assets/sneakers/sneakers1.png", category: "sneakers" },
    { id: "SN002", name: "Casual White Sneakers", price: 1999, seller: "Urban Steps", path: "assets/sneakers/sneakers2.png", category: "sneakers" },
    { id: "SN003", name: "High Top Street Sneakers", price: 3499, seller: "StreetWear", path: "assets/sneakers/sneakers3.png", category: "sneakers" },
    { id: "SN004", name: "Lightweight Running Shoes", price: 2599, seller: "RunFast", path: "assets/sneakers/sneakers4.png", category: "sneakers" },
    { id: "SN005", name: "Chunky Sneakers", price: 3999, seller: "TrendKicks", path: "assets/sneakers/sneakers5.png", category: "sneakers" },

    // ---------------- TRAVEL ----------------
    { id: "TR001", name: "Travel Backpack 40L", price: 2499, seller: "TravelGear", path: "assets/travel/travel1.png", category: "travel" },
    { id: "TR002", name: "Hard Shell Trolley Bag", price: 4999, seller: "SkyBags", path: "assets/travel/travel2.png", category: "travel" },
    { id: "TR003", name: "Duffel Travel Bag", price: 1999, seller: "CarryPro", path: "assets/travel/travel3.png", category: "travel" },
    { id: "TR004", name: "Travel Organizer Pouch Set", price: 899, seller: "PackSmart", path: "assets/travel/travel4.png", category: "travel" },
    { id: "TR005", name: "Neck Pillow Memory Foam", price: 799, seller: "Comfort Travel", path: "assets/travel/travel5.png", category: "travel" }
  ];

  constructor() { }

  getProductsByCategory(category: string) {
    return this.data.filter((p: Product) => p.category === category);
  }

  getProductById(id: string) {
    return this.data.find((p: Product) => p.id === id);
  }
}
