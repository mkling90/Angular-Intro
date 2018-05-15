// generate - ng g guard products/product
// Use route guard to prevent access, preload data, etc.. to a route
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ProductGuard implements CanActivate {
  constructor(private _router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // verify input is a valid id
      const id = +next.url[1].path;
      if (isNaN(id) || id < 1) {
        alert('invalid product id'); // for testing
        this._router.navigate(['/products']);
        return false;
      }
      return true;
  }
}
