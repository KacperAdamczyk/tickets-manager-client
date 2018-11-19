import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from 'src/app/services/user/user.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogInGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.userService.isLoggedIn().pipe(
        tap(isLogged => {
          if (!isLogged) {
            this.router.navigateByUrl('/login');
          }
        })
      );
  }
}
