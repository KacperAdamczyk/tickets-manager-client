import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import {
  UserActionTypes,
  Login, LoginSuccess, LoginFailure,
  Register, RegisterSuccess, RegisterFailure,
  Activate, ActivateSuccess, ActivateFailure,
  GetUserSuccess, GetUserFailure,
  LogoutSuccess, LogoutFailure,
  ChangePassword, ChangePasswordSuccess, ChangePasswordFailure,
  RequestPasswordReset, RequestPasswordResetSuccess, RequestPasswordResetFailure,
  ValidateToken, ValidateTokenSuccess, ValidateTokenFailure,
  ResetPassword, ResetPasswordSuccess, ResetPasswordFailure,
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
  getUser$ = this.actions$.pipe(
    ofType(UserActionTypes.GetUser),
    mergeMap(() => this.userService.getUser().pipe(
      map(user => new GetUserSuccess(user)),
      catchError(() => of(new GetUserFailure))
    ))
  );

  @Effect()
  register$ = this.actions$.pipe(
    ofType(UserActionTypes.Register),
    mergeMap(({ payload: user }: Register) => (
      this.userService.register(user).pipe(
        this.snackbar.fromResponse(),
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
        this.snackbar.fromResponse(),
        map(response => {
          this.router.navigateByUrl(this.userService.returnUrl);

          return new LoginSuccess(response.user as IUser);
        }),
        catchError(() => of(new LoginFailure))
      )
    ))
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(UserActionTypes.Logout),
    mergeMap(() => (
      this.userService.logout().pipe(
        this.snackbar.fromResponse(),
        map(() => {
          this.router.navigateByUrl('/login');

          return new LogoutSuccess;
        }),
        catchError(() => of(new LogoutFailure))
      )
    ))
  );

  @Effect()
  validateToken$ = this.actions$.pipe(
    ofType(UserActionTypes.ValidateToken),
    mergeMap(({ payload:  { token, purpose } }: ValidateToken) => (
      this.userService.validateToken(token, purpose).pipe(
        map(() => new ValidateTokenSuccess),
        catchError(() => of(new ValidateTokenFailure))
      )
    ))
  );

  @Effect()
  requestPasswordReset$ = this.actions$.pipe(
    ofType(UserActionTypes.RequestPasswordReset),
    mergeMap(({ payload:  { email } }: RequestPasswordReset) => (
      this.userService.requestPasswordReset(email).pipe(
        this.snackbar.fromResponse(),
        map(() => {
          this.router.navigateByUrl('/login');

          return new RequestPasswordResetSuccess;
        }),
        catchError(() => of(new RequestPasswordResetFailure))
      )
    ))
  );

  @Effect()
  resetPassword$ = this.actions$.pipe(
    ofType(UserActionTypes.ResetPassword),
    mergeMap(({ payload: { token, credentials: { password } } }: ResetPassword) => (
      this.userService.resetPassword(token, password).pipe(
        this.snackbar.fromResponse(),
        map(() => {
          this.router.navigateByUrl('/login');

          return new ResetPasswordSuccess;
        }),
        catchError(() => of(new ResetPasswordFailure))
      )
    ))
  );

  @Effect()
  changePassword$ = this.actions$.pipe(
    ofType(UserActionTypes.ChangePassword),
    mergeMap(({ payload: passwords }: ChangePassword) => (
      this.userService.changePassword(passwords).pipe(
        this.snackbar.fromResponse(),
        map(() => {
          this.router.navigateByUrl('/profile');

          return new ChangePasswordSuccess;
        }),
        catchError(() => of(new ChangePasswordFailure))
      )
    ))
  );

  @Effect()
  activate$ = this.actions$.pipe(
    ofType(UserActionTypes.Activate),
    mergeMap(({ payload: { token } }: Activate) => (
      this.userService.activate(token).pipe(
        this.snackbar.fromResponse(),
        map(() => {
          this.router.navigateByUrl('/login');

          return new ActivateSuccess;
        }),
        catchError(() => of(new ActivateFailure))
      )
    ))
  );
}
