import { Product } from './product.model';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: `
    <div class="inventory-app">
      (Products go here)
    </div>
  `
})

export class AppComponent {
  product: Product;

 constructor() {
  this.product =  new Product(
    'NICEHAT',
    'A Nice Black Hat',
    '/assets/images/products/black-hat.jpg',
    ['Men', 'Accessories', 'Hats'],
    29.99
  );

 }

}
