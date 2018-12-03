import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState } from 'src/app/reducers';
import { Logout } from 'src/app/actions/user/user.actions';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  links = [
    { path: '/dashboard', label: 'Book ticket' },
    { path: '/tickets', label: 'My tickets' },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  user$ = this.store.pipe(
    select('user', 'user'),
  );

  logout() {
    this.store.dispatch(new Logout);
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
     private store: Store<AppState>,
     private router: Router,
     ) {}
  }
