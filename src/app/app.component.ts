import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { GetUser } from './actions/user/user.actions';
import { AppState } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.store.dispatch(new GetUser);
  }

  constructor(private store: Store<AppState>) {}
}
