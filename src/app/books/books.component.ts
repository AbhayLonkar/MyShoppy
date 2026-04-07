import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  data: any[] = [];
  constructor(private productService: ProductService) { };

  ngOnInit() {
    this.data = this.productService.getProductsByCategory('books');
  }
}
