import { Injectable } from '@angular/core';
import { IUser } from 'src/app/models/user.interface';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { IDataResponse, IMessageResponse } from 'src/app/shared/interfaces/response.interface';
import { AppState } from 'src/app/reducers';
import {State as UserState } from 'src/app/reducers/user/user.reducer';
import { GetUser } from 'src/app/actions/user/user.actions';


export type TokenPurpose = 'activation' | 'password-reset';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private store: Store<AppState>) { }

  register(user: Partial<IUser>): Observable<IDataResponse> {
    return this.http.post<IDataResponse>(`${environment.apiUrl}/users`, user);
  }

  login(email: string, password: string): Observable<IDataResponse> {
    return this.http.post<IDataResponse>(`${environment.apiUrl}/users/login`, { email, password });
  }

  getUser(): Observable<IUser> {
    return this.http.get<IUser>(`${environment.apiUrl}/users`, { withCredentials: true });
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${environment.apiUrl}/users/all`, { withCredentials: true });
  }

  validateToken(token: string, purpose: TokenPurpose): Observable<IDataResponse> {
    return this.http.get<IDataResponse>(`${environment.apiUrl}/users/validate-token/${purpose}/${token}`);
  }

  activate(token: string): Observable<IMessageResponse> {
    return this.http.put<IMessageResponse>(`${environment.apiUrl}/users/activate/${token}`, {});
  }

  isLoggedIn(): Observable<boolean> {
    return this.store.pipe(
      select('user'),
      filter((user: UserState) => !user.getPending),
      map(({ user }) => !!user)
    );
  }

  isAdmin(): Observable<boolean> {
    return this.getUser().pipe(
      map(user => user.admin)
    );
  }
}
