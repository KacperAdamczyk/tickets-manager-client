import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';

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

  constructor(private breakpointObserver: BreakpointObserver, private store: Store<AppState>) {}
  }
