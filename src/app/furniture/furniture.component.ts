import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent {
  data: any[] = [];
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { };

  ngOnInit() {
    this.data = this.productService.getProductsByCategory('furniture');
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
}
