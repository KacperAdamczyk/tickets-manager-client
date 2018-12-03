import { Injectable } from '@angular/core';
import { CanActivate, Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from 'src/app/services/user/user.service';
import { tap, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogInGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(): Observable<boolean> {
      return this.userService.isLoggedIn().pipe(
        tap(isLogged => {
          if (!isLogged) {
            this.router.navigateByUrl('/login');
          }
        })
      );
  }

  canLoad(): Observable<boolean> {
    return this.canActivate().pipe(first());
  }
}
