import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userData = JSON.parse(localStorage.getItem('user')!);
    if (route.data['roles'] && !route.data['roles'].includes(userData.role)) {
      if (userData.role === 'ADMIN') {
        this.router.navigate(['index/hoteles']);
      } else if (userData.role === 'CLIENT') {
        this.router.navigate(['cliente/home']);
      }
      return false;
    }
    return true;
  }
  
}
