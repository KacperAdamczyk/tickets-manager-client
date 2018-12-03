import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import {
  AdminActionTypes,
  GetTicketsFailure,
  GetTicketsSuccess,
  GetTicket,
  GetTicketSuccess,
  DeleteTicket,
  DeleteTicketFailure,
  DeleteTicketSuccess,
  GetTickets,
  GetUsersSuccess,
  GetUsersFailure,
} from '../../actions/admin/admin.actions';
import { TicketService } from 'src/app/services/ticket/ticket.service';
import { UserService } from 'src/app/services/user/user.service';

@Injectable()
export class AdminEffects {
  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType(AdminActionTypes.GetUsers),
    mergeMap(() => (
      this.userService.getUsers().pipe(
        map(users => new GetUsersSuccess(users)),
        catchError(() => of(new GetUsersFailure))
      )
    ))
  );

  @Effect()
  getTickets$ = this.actions$.pipe(
    ofType(AdminActionTypes.GetTickets),
    mergeMap(({ payload: { id } }: GetTickets) => (
      this.ticketService.getTicketsForUser(id).pipe(
        map(tickets => new GetTicketsSuccess(tickets)),
        catchError(() => of(new GetTicketsFailure))
      )
    ))
  );

  @Effect()
  getTicket$ = this.actions$.pipe(
    ofType(AdminActionTypes.GetTicket),
    mergeMap(({ payload: { id } }: GetTicket) => (
      this.ticketService.getTicket(id).pipe(
        map(ticket => new GetTicketSuccess(ticket)),
        catchError(() => of(new GetTicketsFailure))
      )
    ))
  );

  @Effect()
  deleteTicket$ = this.actions$.pipe(
    ofType(AdminActionTypes.DeleteTicket),
    mergeMap(({ payload: { id } }: DeleteTicket) => (
      this.ticketService.deleteTicket(id).pipe(
        map(() => new DeleteTicketSuccess({ id })),
        catchError(() => of(new DeleteTicketFailure))
      )
    ))
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private ticketService: TicketService,
  ) {}
}
