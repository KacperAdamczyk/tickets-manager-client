import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import {
  DashboardActionTypes,
  GetFilteredAirports,
  GetFilteredAirportsSuccess,
  GetFilteredAirportsFailure,
  GetRoutes,
  GetRoutesSuccess,
  GetRoutesFailure,
  CreateTicket,
  CreateTicketSuccess,
  CreateTicketFailure
} from 'src/app/actions/dashboard/dashboard.actions';
import { IAirport } from 'src/app/models/airport.interface';
import { AirportService } from 'src/app/services/airport/airport.service';
import { RouteService } from 'src/app/services/route/route.service';
import { IRoute } from 'src/app/models/route.interface';
import { TicketService } from 'src/app/services/ticket/ticket.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';


@Injectable()
export class DashboardEffects {

  constructor(
    private actions$: Actions,
    private airportService: AirportService,
    private routeService: RouteService,
    private ticketService: TicketService,
    private snackbar: SnackbarService,
    ) {}

  @Effect()
  getFilteredAirports$ = this.actions$.pipe(
    ofType(DashboardActionTypes.GetFilteredAirports),
    mergeMap(({ payload: { query, field, exclude } }: GetFilteredAirports) => (
      this.airportService.getFiltered(query, exclude).pipe(
        map(response => new GetFilteredAirportsSuccess({ field, airports: response as IAirport[] })),
        catchError(() => of(new GetFilteredAirportsFailure({ field })))
      )
    ))
  );

  @Effect()
  getRoutes$ = this.actions$.pipe(
    ofType(DashboardActionTypes.GetRoutes),
    mergeMap(({ payload: { fromCode, toCode } }: GetRoutes) => (
      this.routeService.getRoutes(fromCode, toCode).pipe(
        map(response => new GetRoutesSuccess({ routes: response as IRoute[] })),
        catchError(() => of(new GetRoutesFailure))
      )
    ))
  );

  @Effect()
  createTicket$ = this.actions$.pipe(
    ofType(DashboardActionTypes.CreateTicket),
    mergeMap(({ payload: { routeId, startDate } }: CreateTicket) => (
      this.ticketService.create(routeId, startDate).pipe(
        this.snackbar.fromResponse(),
        map(() => new CreateTicketSuccess),
        catchError(() => of(new CreateTicketFailure))
      )
    ))
  );
}
