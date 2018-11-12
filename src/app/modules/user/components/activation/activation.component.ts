import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState } from 'src/app/reducers';
import { Activate } from 'src/app/actions/user/user.actions';
import { State as UserState } from 'src/app/reducers/user/user.reducer';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.scss']
})
export class ActivationComponent implements OnInit {

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  isInvalid$: Observable<boolean> = this.store.pipe(
    select('user'),
    map((user: UserState) => !user.activatePending)
  );

  ngOnInit() {
    const token = this.route.snapshot.params.token;

    this.store.dispatch(new Activate({ token }));
  }


}
