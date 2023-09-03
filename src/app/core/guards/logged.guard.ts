import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userLogged = localStorage.getItem('user');
    if (userLogged) {
      const userInfo = JSON.parse(userLogged);
      if (userInfo.role === 'ADMIN') {
        this.router.navigate(['index/hoteles']);
      } else if (userInfo.role === 'CLIENT') {
        this.router.navigate(['cliente/home']);
      }
      return false;
    }
    return true;
  }
  
}
