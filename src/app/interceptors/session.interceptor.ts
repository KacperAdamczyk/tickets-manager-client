import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { ClearUser } from '../actions/user/user.actions';

@Injectable()
export class SessionInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((response: HttpErrorResponse) => {
        if (response.status === 401 || response.status === 440) {
          this.store.dispatch(new ClearUser);
          this.router.navigateByUrl('/login');
        }

        return throwError(response);
      })
    );
  }
}
