import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';

import { IDataResponse } from 'src/app/shared/interfaces/response.interface';
import { tap } from 'rxjs/operators';

export type SnackbarType = 'error' | 'success';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar) { }

  public fromResponse = tap((response: IDataResponse) => this.showSnackbar(response.message));

  showSnackbar(message, type: SnackbarType = 'success', duration = 5000): void {
    const snackbar = this.snackbar.open(
      message,
      'Dismiss', {
      duration,
      panelClass: ['snackbar', `snackbar--${type}`]
    });

    snackbar.onAction().subscribe(() => snackbar.dismiss());
  }
}
