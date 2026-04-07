import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  data: any[] = [];
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { };

  ngOnInit() {
    this.data = this.productService.getProductsByCategory('books');
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
}
