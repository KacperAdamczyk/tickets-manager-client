import { Action } from '@ngrx/store';
import { UserActions, UserActionTypes } from '../../actions/user/user.actions';
import { PendingState } from 'src/app/shared/interfaces/pending.interface';
import { IUser } from 'src/app/models/user.interface';

export interface State extends PendingState {
  userDetails?: IUser;
}

export const initialState: State = {
  isPending: false,
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {
    case UserActionTypes.GetUser:
    case UserActionTypes.Login:
    case UserActionTypes.Register:
      return {
        isPending: true,
        userDetails: null,
      };

    case UserActionTypes.GetUserSuccess:
    case UserActionTypes.LoginSuccess:
      return {
        isPending: false,
        userDetails: action.payload,
      };

    case UserActionTypes.GetUserFailure:
    case UserActionTypes.LoginFailure:
    case UserActionTypes.RegisterSuccess:
    case UserActionTypes.RegisterFailure:
      return {
        isPending: false,
        userDetails: null,
      };

    default:
      return state;
  }
}
