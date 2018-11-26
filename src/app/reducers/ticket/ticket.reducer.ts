import { Action } from '@ngrx/store';
import { ITicket } from 'src/app/models/ticket.interface';
import { TicketActionTypes, TicketActions } from 'src/app/actions/ticket/ticket.actions';


export interface State {
  createTicketPending: boolean;
  getTicketsPending: boolean;
  getTicketPending: boolean;
  deleteTicketsPending: boolean;
  tickets: Partial<ITicket>[];
  ticket: ITicket;
}

export const initialState: State = {
  createTicketPending: false,
  getTicketsPending: false,
  getTicketPending: false,
  deleteTicketsPending: false,
  tickets: [],
  ticket: null,
};

export function reducer(state = initialState, action: TicketActions): State {
  switch (action.type) {
    case TicketActionTypes.CreateTicket:
    return {
      ...state,
      createTicketPending: true,
    };

    case TicketActionTypes.CreateTicketSuccess:
    case TicketActionTypes.CreateTicketFailure:
    return {
      ...state,
      createTicketPending: false,
    };

    case TicketActionTypes.GetTickets:
    return {
      ...state,
      getTicketsPending: true,
    };

    case TicketActionTypes.GetTicketsSuccess:
    return {
      ...state,
      getTicketsPending: false,
      tickets: action.payload,
    };

    case TicketActionTypes.GetTicketsFailure:
    return {
      ...state,
      getTicketsPending: false,
      tickets: [],
    };

    case TicketActionTypes.GetTicket:
    return {
      ...state,
      getTicketPending: true,
    };

    case TicketActionTypes.GetTicketSuccess:
    return {
      ...state,
      getTicketPending: false,
      ticket: action.payload,
    };

    case TicketActionTypes.GetTicketFailure:
    return {
      ...state,
      getTicketPending: false,
      ticket: null,
    };

    case TicketActionTypes.DeleteTicket:
    return {
      ...state,
      deleteTicketsPending: true,
    };

    case TicketActionTypes.DeleteTicketSuccess:
    return {
      ...state,
      deleteTicketsPending: false,
      tickets: state.tickets.filter(({ id }) => id !== action.payload.id),
    };

    case TicketActionTypes.DeleteTicketFailure:
    return {
      ...state,
      deleteTicketsPending: false,
    };

    default:
      return state;
  }
}
