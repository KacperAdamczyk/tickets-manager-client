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
} from 'src/app/actions/dashboard/dashboard.actions';
import { IAirport } from 'src/app/models/airport.interface';
import { AirportService } from 'src/app/services/airport/airport.service';
import { RouteService } from 'src/app/services/route/route.service';
import { IRoute } from 'src/app/models/route.interface';

@Injectable()
export class DashboardEffects {
  constructor(
    private actions$: Actions,
    private airportService: AirportService,
    private routeService: RouteService,
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
}
