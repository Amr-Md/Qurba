import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts<T>(): Observable<T> {
    return this.http.get<T>('https://dummyjson.com/products');
  }
  getAllcategories<T>(): Observable<T> {
    return this.http.get<T>('https://dummyjson.com/products/categories');
  }
  getOnecategory<T>(category: string): Observable<T> {
    return this.http.get<T>(
      `https://dummyjson.com/products/category/${category}`
    );
  }
  searchProducts<T>(Product: string): Observable<T> {
    return this.http.get<T>(
      `https://dummyjson.com/products/search?q=${Product}`
    );
  }
}
