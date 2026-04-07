import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-handbag',
  templateUrl: './handbag.component.html',
  styleUrls: ['./handbag.component.css']
})
export class HandbagComponent {
  data: any[] = [];
  constructor(private productService: ProductService) { };

  ngOnInit() {
    this.data = this.productService.getProductsByCategory('handbag');
  }
}
