import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  directionSelected$: Observable<boolean> = this.store.pipe(
    select('dashboard'),
    map(({ selectedFrom, selectedTo}) => !!(selectedFrom && selectedTo))
  );

  constructor(private store: Store<AppState>) { }
}
