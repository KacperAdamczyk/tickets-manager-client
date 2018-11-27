import { Action } from '@ngrx/store';
import { AdminActions, AdminActionTypes } from '../../actions/admin/admin.actions';
import { ITicket } from 'src/app/models/ticket.interface';
import { IUser } from 'src/app/models/user.interface';

export interface State {
  getUsersPending: boolean;
  getTicketsPending: boolean;
  getTicketPending: boolean;
  deleteTicketsPending: boolean;
  tickets: Partial<ITicket>[];
  ticket: ITicket;
  users: Partial<IUser>[];
}

export const initialState: State = {
  getUsersPending: false,
  getTicketsPending: false,
  getTicketPending: false,
  deleteTicketsPending: false,
  tickets: [],
  ticket: null,
  users: [],
};

export function reducer(state = initialState, action: AdminActions): State {
  switch (action.type) {
    case AdminActionTypes.GetUsers:
    return {
      ...state,
      getUsersPending: true,
    };

    case AdminActionTypes.GetUsersSuccess:
    return {
      ...state,
      getUsersPending: false,
      users: action.payload,
    };

    case AdminActionTypes.GetUsersFailure:
    return {
      ...state,
      getUsersPending: false,
      users: [],
    };

    case AdminActionTypes.GetTickets:
    return {
      ...state,
      getTicketsPending: true,
    };

    case AdminActionTypes.GetTicketsSuccess:
    return {
      ...state,
      getTicketsPending: false,
      tickets: action.payload,
    };

    case AdminActionTypes.GetTicketsFailure:
    return {
      ...state,
      getTicketsPending: false,
      tickets: [],
    };

    case AdminActionTypes.GetTicket:
    return {
      ...state,
      getTicketPending: true,
      ticket: null,
    };

    case AdminActionTypes.GetTicketSuccess:
    return {
      ...state,
      getTicketPending: false,
      ticket: action.payload,
    };

    case AdminActionTypes.GetTicketFailure:
    return {
      ...state,
      getTicketPending: false,
      ticket: null,
    };

    case AdminActionTypes.DeleteTicket:
    return {
      ...state,
      deleteTicketsPending: true,
    };

    case AdminActionTypes.DeleteTicketSuccess:
    return {
      ...state,
      deleteTicketsPending: false,
      tickets: state.tickets.filter(({ id }) => id !== action.payload.id),
    };

    case AdminActionTypes.DeleteTicketFailure:
    return {
      ...state,
      deleteTicketsPending: false,
    };

    default:
      return state;
  }
}

