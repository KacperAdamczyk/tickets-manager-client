import { Action } from '@ngrx/store';
import { ITicket } from 'src/app/models/ticket.interface';
import { TicketActionTypes, TicketActions } from 'src/app/actions/ticket/ticket.actions';


export interface State {
  createTicketPending: boolean;
  GetTicketsPending: boolean;
  GetTicketPending: boolean;
  DeleteTicketsPending: boolean;
  tickets: Partial<ITicket>[];
  ticket: ITicket;
}

export const initialState: State = {
  createTicketPending: false,
  GetTicketsPending: false,
  GetTicketPending: false,
  DeleteTicketsPending: false,
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
      GetTicketsPending: true,
    };

    case TicketActionTypes.GetTicketsSuccess:
    return {
      ...state,
      GetTicketsPending: false,
      tickets: action.payload,
    };

    case TicketActionTypes.GetTicketsFailure:
    return {
      ...state,
      GetTicketsPending: false,
      tickets: [],
    };

    case TicketActionTypes.GetTicket:
    return {
      ...state,
      GetTicketPending: true,
    };

    case TicketActionTypes.GetTicketSuccess:
    return {
      ...state,
      GetTicketPending: false,
      ticket: action.payload,
    };

    case TicketActionTypes.GetTicketFailure:
    return {
      ...state,
      GetTicketPending: false,
      ticket: null,
    };

    default:
      return state;
  }
}
