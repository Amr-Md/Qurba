import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input('pageNumber') pageNumber: number = 0;
  @Output('page') page: EventEmitter<any> = new EventEmitter<any>();
  classname: string = '';
  clickedIndex: number = 0;
  constructor() {}

  ngOnInit(): void {}

  submit(i: number) {
    this.clickedIndex = i;
    this.page.next(i + 1);
  }
}
