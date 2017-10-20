import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router"


@Injectable()
export class AuthGuardService implements CanActivate {
  isAuthenticated: boolean = false;

  constructor(private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


    if (next.url[0].path === 'dash') {

      if (this.isAuthenticated === false) {
        alert('You must be logged in');
        this.router.navigate(['/auth']);
        return false;

      } else {

        return true;
      }

    }



  }
}
