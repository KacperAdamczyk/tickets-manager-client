import { Action } from '@ngrx/store';

import { IUser, ICredentials, IToken } from 'src/app/models/user.interface';

export enum UserActionTypes {
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success',
  GetUserFailure = '[User] Get User Failure',

  Login = '[User] Login',
  LoginSuccess = '[User] Login Success',
  LoginFailure = '[User] Login Failure',

  Register = '[User] Register',
  RegisterSuccess = '[User] Register Success',
  RegisterFailure = '[User] Register Failure',

  Activate = '[User] Activate',
  ActivateSuccess = '[User] Activate Success',
  ActivateFailure = '[User] Activate Failure',
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
type GetUserTypes = GetUser | GetUserSuccess | GetUserFailure;

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

export class Register implements Action {
  readonly type = UserActionTypes.Register;

  constructor(public payload: ICredentials) {}
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

export type UserActions =
GetUserTypes |
LoginTypes |
RegisterTypes |
ActivateTypes;
