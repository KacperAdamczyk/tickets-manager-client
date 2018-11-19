import { UserActions, UserActionTypes } from '../../actions/user/user.actions';
import { IUser } from 'src/app/models/user.interface';

export interface State {
  getPending: boolean;
  loginPending: boolean;
  registerPending: boolean;
  activatePending: boolean;
  userDetails?: IUser;
}

export const initialState: State = {
  getPending: false,
  loginPending: false,
  registerPending: false,
  activatePending: false,
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {
    case UserActionTypes.GetUser:
      return {
        ...state,
        getPending: true,
        userDetails: null,
      };
    case UserActionTypes.Login:
      return {
        ...state,
        loginPending: true,
        userDetails: null,
      };
    case UserActionTypes.Register:
      return {
        ...state,
        registerPending: true,
        userDetails: null,
      };
    case UserActionTypes.Activate:
      return {
        ...state,
        activatePending: true,
        userDetails: null,
      };

    case UserActionTypes.GetUserSuccess:
      return {
        ...state,
        getPending: false,
        userDetails: action.payload,
      };
    case UserActionTypes.LoginSuccess:
      return {
        ...state,
        loginPending: false,
        userDetails: action.payload,
      };

    case UserActionTypes.GetUserFailure:
    case UserActionTypes.ClearUserDetails:
      return {
        ...state,
        getPending: false,
        userDetails: null,
      };
    case UserActionTypes.LoginFailure:
      return {
        ...state,
        loginPending: false,
        userDetails: null,
      };
    case UserActionTypes.RegisterSuccess:
    case UserActionTypes.RegisterFailure:
      return {
        ...state,
        registerPending: false,
        userDetails: null,
      };
    case UserActionTypes.ActivateSuccess:
    case UserActionTypes.ActivateFailure:
      return {
        ...state,
        activatePending: false,
        userDetails: null,
      };

    default:
      return state;
  }
}
