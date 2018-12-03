import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';
import { GetUsers, GetTickets } from 'src/app/actions/admin/admin.actions';
import { FormControl, FormBuilder } from '@angular/forms';
import { startWith, map, withLatestFrom, filter } from 'rxjs/operators';
import { IUser } from 'src/app/models/user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-tickets',
  templateUrl: './users-tickets.component.html',
  styleUrls: ['./users-tickets.component.scss']
})
export class UsersTicketsComponent implements OnInit, OnDestroy {
  userForm = this.fb.group({
    userQuery: '',
  });

  users$ = this.store.pipe(
    select('admin', 'users'),
  );

  tickets$ = this.store.pipe(
    select('admin', 'tickets'),
  );

  filteredUsers$: Observable<Partial<IUser>[]> = this.userQuery.valueChanges.pipe(
    startWith(''),
    filter(value => typeof value === 'string'),
    withLatestFrom(this.users$),
    map(([value, users]) => this.filter(value, users))
  );

  selectedUserSubscription = this.userQuery.valueChanges.pipe(
    filter(value => typeof value === 'object'),
  ).subscribe((user: Partial<IUser>) => {
    this.store.dispatch(new GetTickets({ id: user._id }));
  });

  private filter(value: string, users: Partial<IUser>[]): Partial<IUser>[] {
    const filterValue = value.toLowerCase();

    return users.filter(user => this.formatUser(user).toLowerCase().includes(filterValue));
  }

  get userQuery() {
    return this.userForm.get('userQuery') as FormControl;
  }

  formatUser(user: Partial<IUser>): string {
    return typeof user === 'object'
      ? `${user.email} - ${user.firstName} ${user.lastName}`
      : '';
  }

  constructor(private store: Store<AppState>, private fb: FormBuilder) { }

  ngOnInit() {
    this.store.dispatch(new GetUsers);
  }

  ngOnDestroy() {
    this.selectedUserSubscription.unsubscribe();
  }

}
