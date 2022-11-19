import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { SearchService } from 'src/app/core/service/search.service';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  login: boolean = false;
  searchInput: any;
  constructor(
    private searchService: SearchService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.userData$.subscribe((res) => {
      this.login = localStorage.getItem('login') == 'true' ? true : false;
    });
  }

  onSearch($event: any) {
    this.searchService.search.next(this.searchInput);
  }
}
