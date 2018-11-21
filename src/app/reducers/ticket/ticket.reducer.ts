import { Action } from '@ngrx/store';
import { ITicket } from 'src/app/models/ticket.interface';
import { TicketActionTypes, TicketActions } from 'src/app/actions/ticket/ticket.actions';


export interface State {
  GetTicketsPending: boolean;
  GetTicketPending: boolean;
  DeleteTicketsPending: boolean;
  tickets: Partial<ITicket>[];
}

export const initialState: State = {
  GetTicketsPending: false,
  GetTicketPending: false,
  DeleteTicketsPending: false,
  tickets: [],
};

export function reducer(state = initialState, action: TicketActions): State {
  switch (action.type) {
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

    default:
      return state;
  }
}
