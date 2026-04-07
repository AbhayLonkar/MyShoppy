import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent {
  data: any[] = [];
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { };

  ngOnInit() {
    this.data = this.productService.getProductsByCategory('tech');
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
}
