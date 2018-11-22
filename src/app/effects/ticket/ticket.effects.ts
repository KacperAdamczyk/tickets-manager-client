import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import {
  TicketActionTypes,
  GetTicketsSuccess,
  GetTicketsFailure,
  GetTicketSuccess,
  GetTicket,
  CreateTicket,
  CreateTicketSuccess,
  CreateTicketFailure
} from '../../actions/ticket/ticket.actions';
import { TicketService } from 'src/app/services/ticket/ticket.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Injectable()
export class TicketEffects {
  @Effect()
  createTicket$ = this.actions$.pipe(
    ofType(TicketActionTypes.CreateTicket),
    mergeMap(({ payload: { routeId, startDate } }: CreateTicket) => (
      this.ticketService.create(routeId, startDate).pipe(
        this.snackbar.fromResponse(),
        map(response => {
          this.router.navigateByUrl(`tickets/${response.id}`);

          return new CreateTicketSuccess;
        }),
        catchError(() => of(new CreateTicketFailure))
      )
    ))
  );

  @Effect()
  getTickets$ = this.actions$.pipe(
    ofType(TicketActionTypes.GetTickets),
    mergeMap(() => (
      this.ticketService.getTickets().pipe(
        map(tickets => new GetTicketsSuccess(tickets)),
        catchError(() => of(new GetTicketsFailure))
      )
    ))
  );

  @Effect()
  getTicket$ = this.actions$.pipe(
    ofType(TicketActionTypes.GetTicket),
    mergeMap(({ payload: { id } }: GetTicket) => (
      this.ticketService.getTicket(id).pipe(
        map(ticket => new GetTicketSuccess(ticket)),
        catchError(() => of(new GetTicketsFailure))
      )
    ))
  );

  constructor(
    private actions$: Actions,
    private ticketService: TicketService,
    private router: Router,
    private snackbar: SnackbarService,
    ) { }
}
