import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ProductsService } from 'src/app/core/api/products.service';
import { SearchService } from 'src/app/core/service/search.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output('category') category: EventEmitter<any> = new EventEmitter<any>();
  categories: string[] = [];
  value: any;
  constructor(
    private productsService: ProductsService,
    private searchService: SearchService
  ) {
    this.productsService.getAllcategories().subscribe((res: any) => {
      this.categories = res;
    });
  }

  ngOnInit(): void {
    this.searchService.search.subscribe((res) => {
      this.value = false;
    });
  }

  changevalue(cat: any) {
    this.category.next(cat);
  }
}
