import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, first } from 'rxjs/operators';

import { UserService } from 'src/app/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {
  canLoad(): Observable<boolean> {
    return this.userService.isAdmin().pipe(
      tap(isAdmin => {
        if (!isAdmin) {
          this.router.navigateByUrl('/');
        }
      }),
      first(),
    );
  }

  constructor(private userService: UserService, private router: Router) {}
}
