import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { productlist } from './products';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
 products : IProduct[];
  constructor() {
     const importedProducts = productlist;
     this.products = importedProducts;
 }
  GetImageURL(product:IProduct) {
    return '/assets/images/robot-parts/' + product.imageName;
  }
}
