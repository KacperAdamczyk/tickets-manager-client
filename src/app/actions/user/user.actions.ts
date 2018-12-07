import { Action } from '@ngrx/store';

import { IUser, ICredentials, IToken } from 'src/app/models/user.interface';

export enum UserActionTypes {
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success',
  GetUserFailure = '[User] Get User Failure',
  ClearUser = '[User] Clear User',

  Login = '[User] Login',
  LoginSuccess = '[User] Login Success',
  LoginFailure = '[User] Login Failure',

  Logout = '[User] Logout',
  LogoutSuccess = '[User] Logout Success',
  LogoutFailure = '[User] Logout Failure',

  Register = '[User] Register',
  RegisterSuccess = '[User] Register Success',
  RegisterFailure = '[User] Register Failure',

  Activate = '[User] Activate',
  ActivateSuccess = '[User] Activate Success',
  ActivateFailure = '[User] Activate Failure',

  ResetPassword = '[User] Reset Password',
  ResetPasswordSuccess = '[User] Reset Password Success',
  ResetPasswordFailure = '[User] Reset Password Failure',

  ChangePassword = '[User] Change Password',
  ChangePasswordSuccess = '[User] Change Password Success',
  ChangePasswordFailure = '[User] Change Password Failure',
}

export class GetUser implements Action {
  readonly type = UserActionTypes.GetUser;
}
export class GetUserSuccess implements Action {
  readonly type = UserActionTypes.GetUserSuccess;

  constructor(public payload: IUser) {}
}
export class GetUserFailure implements Action {
  readonly type = UserActionTypes.GetUserFailure;
}
export class ClearUser implements Action {
  readonly type = UserActionTypes.ClearUser;
}
type GetUserTypes = GetUser | GetUserSuccess | GetUserFailure | ClearUser;

export class Login implements Action {
  readonly type = UserActionTypes.Login;

  constructor(public payload: ICredentials) {}
}
export class LoginSuccess implements Action {
  readonly type = UserActionTypes.LoginSuccess;

  constructor(public payload: IUser) {}
}
export class LoginFailure implements Action {
  readonly type = UserActionTypes.LoginFailure;
}
type LoginTypes = Login | LoginSuccess | LoginFailure;

export class Logout implements Action {
  readonly type = UserActionTypes.Logout;
}
export class LogoutSuccess implements Action {
  readonly type = UserActionTypes.LogoutSuccess;
}
export class LogoutFailure implements Action {
  readonly type = UserActionTypes.LogoutFailure;
}
type LogoutTypes = Logout | LogoutSuccess | LogoutFailure;

export class Register implements Action {
  readonly type = UserActionTypes.Register;

  constructor(public payload: Partial<IUser>) {}
}
export class RegisterSuccess implements Action {
  readonly type = UserActionTypes.RegisterSuccess;
}
export class RegisterFailure implements Action {
  readonly type = UserActionTypes.RegisterFailure;
}
type RegisterTypes = Register | RegisterSuccess | RegisterFailure;

export class Activate implements Action {
  readonly type = UserActionTypes.Activate;

  constructor(public payload: IToken) {}
}
export class ActivateSuccess implements Action {
  readonly type = UserActionTypes.ActivateSuccess;
}
export class ActivateFailure implements Action {
  readonly type = UserActionTypes.ActivateFailure;
}
type ActivateTypes = Activate | ActivateSuccess | ActivateFailure;

export class ResetPassword implements Action {
  readonly type = UserActionTypes.ResetPassword;

  constructor(public payload: ICredentials) {}
}
export class ResetPasswordSuccess implements Action {
  readonly type = UserActionTypes.ResetPasswordSuccess;
}
export class ResetPasswordFailure implements Action {
  readonly type = UserActionTypes.ResetPasswordFailure;
}
type ResetPasswordTypes = ResetPassword | ResetPasswordSuccess | ResetPasswordFailure;

export class ChangePassword implements Action {
  readonly type = UserActionTypes.ChangePassword;

  constructor(public payload: ICredentials) {}
}
export class ChangePasswordSuccess implements Action {
  readonly type = UserActionTypes.ChangePasswordSuccess;
}
export class ChangePasswordFailure implements Action {
  readonly type = UserActionTypes.ChangePasswordFailure;
}
type ChangePasswordTypes = ChangePassword | ChangePasswordSuccess | ChangePasswordFailure;

export type UserActions =
GetUserTypes |
LoginTypes |
LogoutTypes |
RegisterTypes |
ActivateTypes |
ResetPasswordTypes |
ChangePasswordTypes;
