import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DateTime } from 'luxon';

import { AppState } from 'src/app/reducers';
import { GetRoutes, ClearRoutes, SetStartDate, SelectRoute } from 'src/app/actions/dashboard/dashboard.actions';
import { IRoute } from 'src/app/models/route.interface';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit, OnDestroy {
  minDate = new Date();

  routesForm = this.fb.group({
    startDate: [null],
  });

  get startDate(): FormControl {
    return this.routesForm.get('startDate') as FormControl;
  }

  startDate$ = this.store.pipe(
    select('dashboard', 'startDate')
  );

  getRoutesPending$ = this.store.pipe(
    select('dashboard', 'getRoutesPending'),
  );

  routes$: Observable<IRoute[]> = combineLatest(
    this.store.pipe(
      select('dashboard', 'routes'),
    ),
    this.startDate$,
  ).pipe(
    map(([routes, startDate]) => routes.map(route => {
      const fromMillis = DateTime.fromMillis(startDate.valueOf()).startOf('day').valueOf();
      const startTime = DateTime.fromMillis(route.startTime as number).plus(fromMillis);
      const endTime = DateTime.fromMillis(route.endTime as number).plus(fromMillis);

      return {
        ...route,
        startTime: startTime.toLocaleString(DateTime.DATETIME_SHORT),
        endTime: endTime.toLocaleString(DateTime.DATETIME_SHORT),
      };
    }))
  );

  airportsSubscription = combineLatest(
    this.store.pipe(
      select('dashboard', 'selectedFrom'),
      map(selectedFrom => selectedFrom && selectedFrom.iata)
    ),
    this.store.pipe(
      select('dashboard', 'selectedTo'),
      map(selectedTo => selectedTo && selectedTo.iata)
    )
  ).subscribe(([fromCode, toCode]) => {
    if (fromCode && toCode) {
      this.store.dispatch(new GetRoutes({ fromCode, toCode }));
    } else {
      this.store.dispatch(new ClearRoutes);
    }
  });

  startDateSubscription = this.startDate.valueChanges.subscribe(date => (
    this.store.dispatch(new SetStartDate(date))
  ));

  setSelectedRoute(route: IRoute) {
    this.store.dispatch(new SelectRoute(route));
  }

  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit() {
    this.startDate.setValue(this.minDate);
  }

  ngOnDestroy() {
    this.airportsSubscription.unsubscribe();
    this.startDateSubscription.unsubscribe();
  }
}
