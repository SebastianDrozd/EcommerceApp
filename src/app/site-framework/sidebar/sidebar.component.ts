import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  categoryList = [];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService
      .getCategories()
      .subscribe((data) => (this.categoryList = data));
  }
}
