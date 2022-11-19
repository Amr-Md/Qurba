import { CanActivate, UrlTree } from '@angular/router';

import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private location: Location) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise<boolean>((resolve, reject) => {
      if (localStorage.getItem('login') == 'true') {
        resolve(true);
      } else {
        reject(false);
        this.location.back();
      }
    });
  }
}
