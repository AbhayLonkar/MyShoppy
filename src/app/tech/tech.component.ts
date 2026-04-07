import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent {
  data: any[] = [];
  constructor(private productService: ProductService) { };

  ngOnInit() {
    this.data = this.productService.getProductsByCategory('tech');
  }
}
