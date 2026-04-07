import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-handbag',
  templateUrl: './handbag.component.html',
  styleUrls: ['./handbag.component.css']
})
export class HandbagComponent {
  data: any[] = [];
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { };

  ngOnInit() {
    this.data = this.productService.getProductsByCategory('handbag');
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
}
