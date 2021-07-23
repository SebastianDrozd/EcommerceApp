import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timeStamp } from 'console';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css'],
})
export class ViewAllProductsByCategoryComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService
  ) {}
  searchCategory = 0;
  productList = [];
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.searchCategory = data.category;

      this.productService.getAllProducts().subscribe((data) => {
        this.productList = data;
      });
    });
  }
  e;
}
