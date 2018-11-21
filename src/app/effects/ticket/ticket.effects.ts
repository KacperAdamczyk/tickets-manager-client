import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { TicketActionTypes, GetTicketsSuccess, GetTicketsFailure } from '../../actions/ticket/ticket.actions';
import { TicketService } from 'src/app/services/ticket/ticket.service';
import { ITicket } from 'src/app/models/ticket.interface';

@Injectable()
export class TicketEffects {

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

  constructor(private actions$: Actions, private ticketService: TicketService) {}
}
