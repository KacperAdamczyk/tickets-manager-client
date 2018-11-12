import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import {
  DashboardActionTypes,
  GetFilteredAirports,
  GetFilteredAirportsSuccess,
  GetFilteredAirportsFailure
} from 'src/app/actions/dashboard/dashboard.actions';
import { IAirportBrief } from 'src/app/models/airport.interface';
import { AirportService } from 'src/app/services/airport/airport.service';


@Injectable()
export class DashboardEffects {

  constructor(private actions$: Actions, private airportService: AirportService) {}

  @Effect()
  getFiltered$ = this.actions$.pipe(
    ofType(DashboardActionTypes.GetFilteredAirports),
    mergeMap(({ payload: { query, field, exclude } }: GetFilteredAirports) => (
      this.airportService.getFiltered(query, exclude).pipe(
        map(response => new GetFilteredAirportsSuccess({ field, airports: response as IAirportBrief[] })),
        catchError(() => of(new GetFilteredAirportsFailure({ field })))
      )
    ))
  );
}
