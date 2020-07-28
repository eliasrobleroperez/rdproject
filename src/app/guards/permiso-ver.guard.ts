import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CrudService } from '../service/crud.service'
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PermisoVerGuard implements CanActivate {

  constructor(private authService: CrudService, private router: Router) { }
  canActivate(): Observable<boolean> {
    return this.authService.userData$.pipe(
      take(1),
      map((user) => {
        if (!user) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      }),
    );
  }

}
