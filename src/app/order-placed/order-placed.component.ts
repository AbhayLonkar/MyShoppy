import { CartService } from './../cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css']
})
export class OrderPlacedComponent {
  constructor(private cartService: CartService) { }
  clearCart() {
    this.cartService.clearCart();
  }
}
