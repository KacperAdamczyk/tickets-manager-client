import { Action } from '@ngrx/store';

import { ITicket } from 'src/app/models/ticket.interface';
import { IdPayload } from 'src/app/shared/interfaces/payloads.interface';
import { IUser } from 'src/app/models/user.interface';

export enum AdminActionTypes {
  GetUsers = '[Admin] Get Users',
  GetUsersSuccess = '[Admin] Get Users Success',
  GetUsersFailure = '[Admin] Get Users Failure',

  GetTickets = '[Admin] Get Tickets',
  GetTicketsSuccess = '[Admin] Get Tickets Success',
  GetTicketsFailure = '[Admin] Get Tickets Failure',

  GetTicket = '[Admin] Get Ticket',
  GetTicketSuccess = '[Admin] Get Ticket Success',
  GetTicketFailure = '[Admin] Get Ticket Failure',

  DeleteTicket = '[Admin] Delete Ticket',
  DeleteTicketSuccess = '[Admin] Delete Ticket Success',
  DeleteTicketFailure = '[Admin] Delete Ticket Failure',
}

export class GetUsers implements Action {
  readonly type = AdminActionTypes.GetUsers;
}

export class GetUsersSuccess implements Action {
  readonly type = AdminActionTypes.GetUsersSuccess;

  constructor(public payload: Partial<IUser>[]) {}
}

export class GetUsersFailure implements Action {
  readonly type = AdminActionTypes.GetUsersFailure;
}

type GetUsersType = GetUsers | GetUsersSuccess | GetUsersFailure;

export class GetTickets implements Action {
  readonly type = AdminActionTypes.GetTickets;

  constructor(public payload: IdPayload) {}
}

export class GetTicketsSuccess implements Action {
  readonly type = AdminActionTypes.GetTicketsSuccess;

  constructor(public payload: Partial<ITicket>[]) {}
}

export class GetTicketsFailure implements Action {
  readonly type = AdminActionTypes.GetTicketsFailure;
}

type GetTicketsType = GetTickets | GetTicketsSuccess | GetTicketsFailure;

export class GetTicket implements Action {
  readonly type = AdminActionTypes.GetTicket;

  constructor(public payload: IdPayload) {}
}

export class GetTicketSuccess implements Action {
  readonly type = AdminActionTypes.GetTicketSuccess;

  constructor(public payload: ITicket) {}
}

export class GetTicketFailure implements Action {
  readonly type = AdminActionTypes.GetTicketFailure;
}

type GetTicketType = GetTicket | GetTicketSuccess | GetTicketFailure;

export class DeleteTicket implements Action {
  readonly type = AdminActionTypes.DeleteTicket;

  constructor(public payload: IdPayload) {}
}

export class DeleteTicketSuccess implements Action {
  readonly type = AdminActionTypes.DeleteTicketSuccess;

  constructor(public payload: IdPayload) {}
}

export class DeleteTicketFailure implements Action {
  readonly type = AdminActionTypes.DeleteTicketFailure;
}

type DeleteTicketType = DeleteTicket | DeleteTicketSuccess | DeleteTicketFailure;

export type AdminActions =
GetUsersType |
GetTicketsType |
GetTicketType |
DeleteTicketType;
