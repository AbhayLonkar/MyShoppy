import { Injectable } from '@angular/core';

interface Product {
    id: string;
    name: string;
    price: number;
    seller: string;
    path: string;
    category: string;
}

export interface CartItem extends Product {
    quantity: number;
}

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartItems: CartItem[] = [];

    constructor() {
        this.loadCartFromStorage();
    }

    addToCart(product: Product): void {
        const existingItem = this.cartItems.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cartItems.push({
                ...product,
                quantity: 1
            });
        }
        this.saveCartToStorage();
    }

    removeFromCart(productId: string): void {
        this.cartItems = this.cartItems.filter(item => item.id !== productId);
        this.saveCartToStorage();
    }

    updateQuantity(productId: string, quantity: number): void {
        const item = this.cartItems.find(item => item.id === productId);
        if (item) {
            if (quantity > 0) {
                item.quantity = quantity;
            } else {
                this.removeFromCart(productId);
            }
            this.saveCartToStorage();
        }
    }

    getCartItems(): CartItem[] {
        return this.cartItems;
    }

    getCartTotal(): number {
        return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getCartCount(): number {
        return this.cartItems.reduce((count, item) => count + item.quantity, 0);
    }

    clearCart(): void {
        this.cartItems = [];
        this.saveCartToStorage();
    }

    private saveCartToStorage(): void {
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }

    private loadCartFromStorage(): void {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            this.cartItems = JSON.parse(savedCart);
        }
    }
}
