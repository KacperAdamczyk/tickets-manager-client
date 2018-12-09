import { Injectable } from '@angular/core';
import { IUser, ICredentials } from 'src/app/models/user.interface';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

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
  private userFetched = false;
  private _returnUrl: string = null;
  private notReturnablePaths = ['/login'];

  get returnUrl(): string {
    const url = this._returnUrl;
    this._returnUrl = null;

    return url || '/';
  }

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  savePath() {
    const path = location.pathname;

    if (this.notReturnablePaths.includes(path)) {
      return;
    }

    this._returnUrl = path;
  }

  register(user: Partial<IUser>): Observable<IDataResponse> {
    return this.http.post<IDataResponse>(`${environment.apiUrl}/users`, user);
  }

  login(email: string, password: string): Observable<IDataResponse> {
    return this.http.post<IDataResponse>(`${environment.apiUrl}/users/login`, { email, password });
  }

  logout(): Observable<IMessageResponse> {
    return this.http.get<IMessageResponse>(`${environment.apiUrl}/users/logout`);
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

  changePassword(passwords: ICredentials): Observable<IMessageResponse> {
    return this.http.patch<IMessageResponse>(
      `${environment.apiUrl}/users/password`,
      passwords,
      { withCredentials: true }
    );
  }

  activate(token: string): Observable<IMessageResponse> {
    return this.http.patch<IMessageResponse>(`${environment.apiUrl}/users/activate/${token}`, {});
  }

  isLoggedIn(): Observable<boolean> {
    if (!this.userFetched) {
      this.store.dispatch(new GetUser);
      this.userFetched = true;
    }

    return this.store.pipe(
      select('user'),
      filter((user: UserState) => !user.getPending && this.userFetched),
      map(({ user }) => !!user)
    );
  }

  isAdmin(): Observable<boolean> {
    return this.store.pipe(
      select('user'),
      filter((user: UserState) => !user.getPending),
      map(({ user }) => user && user.admin)
    );
  }
}
