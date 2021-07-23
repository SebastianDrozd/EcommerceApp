import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css'],
})
export class ViewAllProductsComponent implements OnInit {
  constructor(private porudctservice: ProductsService) {}
  productList = [];
  ngOnInit(): void {
    this.porudctservice.getAllProducts().subscribe((data) => {
      this.productList = data;
      console.log(this.productList);
    });
  }
}
