import { Action } from '@ngrx/store';
import { IdPayload } from 'src/app/shared/interfaces/payloads.interface';
import { ITicket } from 'src/app/models/ticket.interface';

export enum TicketActionTypes {
  GetTickets = '[Ticket] Get Tickets',
  GetTicketsSuccess = '[Ticket] Get Tickets Success',
  GetTicketsFailure = '[Ticket] Get Tickets Failure',

  GetTicket = '[Ticket] Get Ticket',
  GetTicketSuccess = '[Ticket] Get Ticket Success',
  GetTicketFailure = '[Ticket] Get Ticket Failure',

  DeleteTicket = '[Ticket] Delete Ticket',
  DeleteTicketSuccess = '[Ticket] Delete Ticket Success',
  DeleteTicketFailure = '[Ticket] Delete Ticket Failure',
}

export class GetTickets implements Action {
  readonly type = TicketActionTypes.GetTickets;
}

export class GetTicketsSuccess implements Action {
  readonly type = TicketActionTypes.GetTicketsSuccess;

  constructor(public payload: Partial<ITicket>[]) {}
}

export class GetTicketsFailure implements Action {
  readonly type = TicketActionTypes.GetTicketsFailure;
}

type GetTicketsType = GetTickets | GetTicketsSuccess | GetTicketsFailure;

export class GetTicket implements Action {
  readonly type = TicketActionTypes.GetTicket;

  constructor(public payload: IdPayload) {}
}

export class GetTicketSuccess implements Action {
  readonly type = TicketActionTypes.GetTicketSuccess;
}

export class GetTicketFailure implements Action {
  readonly type = TicketActionTypes.GetTicketFailure;
}

type GetTicketType = GetTicket | GetTicketSuccess | GetTicketFailure;

export class DeleteTicket implements Action {
  readonly type = TicketActionTypes.DeleteTicket;

  constructor(public payload: IdPayload) {}
}

export class DeleteTicketSuccess implements Action {
  readonly type = TicketActionTypes.DeleteTicketSuccess;
}

export class DeleteTicketFailure implements Action {
  readonly type = TicketActionTypes.DeleteTicketFailure;
}

type DeleteTicketType = DeleteTicket | DeleteTicketSuccess | DeleteTicketFailure;

export type TicketActions =
GetTicketsType |
GetTicketType |
DeleteTicketType;
