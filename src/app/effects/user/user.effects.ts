import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';

import {
  UserActionTypes,
  Login, LoginSuccess, LoginFailure,
  Register, RegisterSuccess, RegisterFailure
} from '../../actions/user/user.actions';
import { UserService } from 'src/app/services/user/user.service';
import { IUser } from 'src/app/models/user.interface';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router,
    private snackbar: SnackbarService
    ) { }

  @Effect()
  getUser$ = this.actions$.pipe(ofType(UserActionTypes.GetUser));

  @Effect()
  register$ = this.actions$.pipe(
    ofType(UserActionTypes.Register),
    mergeMap(({ payload: { email, password } }: Register) => (
      this.userService.register(email, password).pipe(
        this.snackbar.fromResponse,
        map(() => {
          this.router.navigateByUrl('/login');

          return new RegisterSuccess;
        }),
        catchError(() => of(new RegisterFailure))
      )
    ))
  );

  @Effect()
  login$ = this.actions$.pipe(
    ofType(UserActionTypes.Login),
    mergeMap(({ payload: { email, password } }: Login) => (
      this.userService.login(email, password).pipe(
        this.snackbar.fromResponse,
        map(response => {
          this.router.navigateByUrl('/');

          return new LoginSuccess(response.user as IUser);
        }),
        catchError(() => of(new LoginFailure))
      )
    ))
  );
}
