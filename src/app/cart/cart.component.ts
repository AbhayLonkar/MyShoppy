import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalPrice = this.cartService.getCartTotal();
  }

  removeFromCart(productId: string) {
    this.cartService.removeFromCart(productId);
    this.loadCart();
  }

  updateQuantity(productId: string, quantity: number | string) {
    const qty = typeof quantity === 'string' ? parseInt(quantity, 10) : quantity;
    this.cartService.updateQuantity(productId, qty);
    this.loadCart();
  }

  clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
      this.cartService.clearCart();
      this.loadCart();
    }
  }

  checkout() {
    if (this.cartItems.length === 0) {
      alert('Your cart is empty!');
    } else {
      alert(`Order placed! Total: Rs. ${this.totalPrice}`);
      this.cartService.clearCart();
      this.loadCart();
    }
  }
}
