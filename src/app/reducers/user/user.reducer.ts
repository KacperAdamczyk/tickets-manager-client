import { UserActions, UserActionTypes } from '../../actions/user/user.actions';
import { IUser } from 'src/app/models/user.interface';

export interface State {
  getPending: boolean;
  loginPending: boolean;
  logoutPending: boolean;
  registerPending: boolean;
  activatePending: boolean;
  user?: IUser;
}

export const initialState: State = {
  getPending: false,
  loginPending: false,
  logoutPending: false,
  registerPending: false,
  activatePending: false,
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {
    case UserActionTypes.GetUser:
      return {
        ...state,
        getPending: true,
        user: null,
      };
    case UserActionTypes.Login:
      return {
        ...state,
        loginPending: true,
        user: null,
      };
      case UserActionTypes.Logout:
      return {
        ...state,
        logoutPending: true,
      };
    case UserActionTypes.Register:
      return {
        ...state,
        registerPending: true,
        user: null,
      };
    case UserActionTypes.Activate:
      return {
        ...state,
        activatePending: true,
        user: null,
      };

    case UserActionTypes.GetUserSuccess:
      return {
        ...state,
        getPending: false,
        user: action.payload,
      };
    case UserActionTypes.LoginSuccess:
      return {
        ...state,
        loginPending: false,
        user: action.payload,
      };
      case UserActionTypes.LogoutSuccess:
      case UserActionTypes.LogoutFailure:
      return {
        ...state,
        logoutPending: false,
        user: null,
      };

    case UserActionTypes.GetUserFailure:
    case UserActionTypes.ClearUser:
      return {
        ...state,
        getPending: false,
        user: null,
      };
    case UserActionTypes.LoginFailure:
      return {
        ...state,
        loginPending: false,
        user: null,
      };
    case UserActionTypes.RegisterSuccess:
    case UserActionTypes.RegisterFailure:
      return {
        ...state,
        registerPending: false,
        user: null,
      };
    case UserActionTypes.ActivateSuccess:
    case UserActionTypes.ActivateFailure:
      return {
        ...state,
        activatePending: false,
        user: null,
      };

    default:
      return state;
  }
}
