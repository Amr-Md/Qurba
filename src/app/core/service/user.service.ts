import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userData$: BehaviorSubject<any>;
  userData: any = null;

  constructor() {
    this.userData$ = new BehaviorSubject(null);
  }

  setUserData(userData: any) {
    this.userData = Object.assign({}, userData);
    localStorage.setItem('login', 'true');
    return this.userData$.next(userData);
  }
  getUserData(): Observable<any> {
    return this.userData$;
  }
}
