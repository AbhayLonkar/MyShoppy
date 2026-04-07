import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-sneakers',
  templateUrl: './sneakers.component.html',
  styleUrls: ['./sneakers.component.css']
})
export class SneakersComponent {
  data: any[] = [];
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { };

  ngOnInit() {
    this.data = this.productService.getProductsByCategory('sneakers');
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
}
