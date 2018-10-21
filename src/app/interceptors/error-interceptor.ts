import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SnackbarService } from '../services/snackbar/snackbar.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private snackbar: SnackbarService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((response: HttpErrorResponse) => {
        this.snackbar.showSnackbar(response.error.message, 'error');

        return throwError(response);
      })
    );
  }
}
