import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  search: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}
}
