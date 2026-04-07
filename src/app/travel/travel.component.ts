import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent {
  data: any[] = [];
  constructor(private productService: ProductService) { };

  ngOnInit() {
    this.data = this.productService.getProductsByCategory('travel');
  }
}
