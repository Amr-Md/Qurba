import { Component, Input, OnInit } from '@angular/core';

import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input('product') product: any;
  constructor() {}

  ngOnInit(): void {}
}
