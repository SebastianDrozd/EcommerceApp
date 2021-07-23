import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getCategories() {
    const producturl = 'http://localhost:3000/categories';
    return this.http.get<any>(producturl);
  }
  getAllProducts() {
    const producturl = 'http://localhost:3000/products';
    return this.http.get<any>(producturl);
  }

  createProduct(productBody) {
    const producturl = 'http://localhost:3000/products';
    return this.http.post(producturl, productBody);
  }
  viewProduct(id) {
    const producturl = 'http://localhost:3000/products/' + id;
    return this.http.get(producturl);
  }
  updateProduct(id, productBody) {
    const producturl = 'http://localhost:3000/products' + id;
    return this.http.put(producturl, productBody);
  }
  deleteProduct(id) {
    const producturl = 'http://localhost:3000/products/' + id;
    return this.http.delete(producturl);
  }
  searchCategoryProduct(id) {
    const producturl = 'http://localhost:3000/products/category=' + id;
    return this.http.get<any>(producturl);
  }
  searchDateProduct(id) {
    const producturl = 'http://localhost:3000/products/date=' + id;
    return this.http.get(producturl);
  }
}
