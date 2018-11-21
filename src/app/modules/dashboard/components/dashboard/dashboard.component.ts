import { Component, ViewChild, OnDestroy } from '@angular/core';
import { MatHorizontalStepper } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { map, filter, delay } from 'rxjs/operators';

import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  @ViewChild(MatHorizontalStepper) stepper: MatHorizontalStepper;

  constructor(private store: Store<AppState>) {}

  isRouteSelected$ = this.store.pipe(
    select('dashboard', 'selectedRoute'),
    map(selectedRoute => !!selectedRoute),
  );

  isRouteSelectedSubscription = this.isRouteSelected$.pipe(
    filter(isSelected => isSelected),
    delay(0),
  ).subscribe(() => this.stepper.next());

  ngOnDestroy() {
    this.isRouteSelectedSubscription.unsubscribe();
  }
}
