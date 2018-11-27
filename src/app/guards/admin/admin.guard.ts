import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Observable, of } from 'rxjs';

import { UserService } from 'src/app/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {
  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return this.userService.isAdmin();
  }

  constructor(private userService: UserService) {}
}
