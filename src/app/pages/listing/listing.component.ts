import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/core/api/products.service';
import { SearchService } from 'src/app/core/service/search.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  products: any[] = [];
  page: number = 1;
  pagestart: number = 1;
  constructor(
    private productsService: ProductsService,
    private searchService: SearchService
  ) {
    this.productsService.getAllProducts().subscribe((res: any) => {
      this.products = res.products;
    });
  }

  getCategory($event: any) {
    this.productsService.getOnecategory($event).subscribe((res: any) => {
      this.products = res.products;
      this.page = 10;
      this.pagestart = 0;
    });
  }
  getpage($event: any) {
    this.pagestart = ($event - 1) * 10;
    this.page = $event * 10;
  }
  ngOnInit(): void {
    this.page = 10;
    this.pagestart = 0;
    this.searchService.search.subscribe((res) => {
      this.productsService.searchProducts(res).subscribe((res: any) => {
        this.products = res.products;
      });
    });
  }
}
