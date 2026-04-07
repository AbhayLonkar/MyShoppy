import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-sneakers',
  templateUrl: './sneakers.component.html',
  styleUrls: ['./sneakers.component.css']
})
export class SneakersComponent {
  data: any[] = [];
  constructor(private productService: ProductService) { };

  ngOnInit() {
    this.data = this.productService.getProductsByCategory('sneakers');
  }
}
