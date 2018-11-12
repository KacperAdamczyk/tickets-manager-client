import { Component, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { distinctUntilChanged, debounceTime, filter, map, withLatestFrom, tap } from 'rxjs/operators';

import { AppState } from 'src/app/reducers';
import { State as DashboardState } from 'src/app/reducers/dashboard/dashboard.reducer';
import {
  GetFilteredAirports,
  SetSelectedAirport,
  ClearSelectedAirport,
  SwapSelectedAirport
} from 'src/app/actions/dashboard/dashboard.actions';
import { Fields } from 'src/app/models/dashboard.interface';
import { IAirportBrief } from 'src/app/models/airport.interface';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnDestroy {
  tripForm = this.fb.group({
    from: [''],
    to: ['']
  });

  allowedValues = /^[a-zA-Z ]+$/;

  selectedFrom$ = this.store.pipe(
    select('dashboard'),
    map((dashboard: DashboardState) => dashboard.selectedFrom)
  );

  selectedTo$ = this.store.pipe(
    select('dashboard'),
    map((dashboard: DashboardState) => dashboard.selectedTo)
  );

  filteredFromSubscription = this.from.valueChanges.pipe(
    distinctUntilChanged(),
    filter(value => this.allowedValues.test(value)),
    withLatestFrom(this.selectedTo$),
    tap(() => this.store.dispatch(new ClearSelectedAirport({ field: 'from' }))),
    debounceTime(300),
  ).subscribe(([query, selectedTo]) => {
    const field: Fields = 'from';
    const exclude = selectedTo && selectedTo.iata;

    this.store.dispatch(new GetFilteredAirports({ query, field, exclude }));
  });

  filteredToSubscription = this.to.valueChanges.pipe(
    distinctUntilChanged(),
    filter(value => this.allowedValues.test(value)),
    withLatestFrom(this.selectedFrom$),
    tap(() => this.store.dispatch(new ClearSelectedAirport({ field: 'to' }))),
    debounceTime(300),
  ).subscribe(([query, selectedFrom]) => {
    const field: Fields = 'to';
    const exclude = selectedFrom && selectedFrom.iata;

    this.store.dispatch(new GetFilteredAirports({ query, field, exclude }));
  });

  fromOptions$ = this.store.pipe(
    select('dashboard'),
    map((dashboard: DashboardState) => dashboard.fromOptions)
  );

  toOptions$ = this.store.pipe(
    select('dashboard'),
    map((dashboard: DashboardState) => dashboard.toOptions)
  );

  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  get from(): FormControl {
    return this.tripForm.get('from') as FormControl;
  }

  get to(): FormControl {
    return this.tripForm.get('to') as FormControl;
  }

  ngOnDestroy() {
    this.filteredFromSubscription.unsubscribe();
    this.filteredToSubscription.unsubscribe();
  }

  nameMapper(value: IAirportBrief) {
    return value.name;
  }

  handleSelected(field: Fields, event: MatAutocompleteSelectedEvent) {
    const airport = event.option.value as IAirportBrief;

    this.store.dispatch(new SetSelectedAirport({ field, airport }));
  }

  swapAirports() {
    this.store.dispatch(new SwapSelectedAirport);

    const fromValue = this.from.value;

    this.from.setValue(this.to.value);
    this.to.setValue(fromValue);
  }
}
