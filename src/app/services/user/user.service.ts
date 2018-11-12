import { Injectable } from '@angular/core';
import { IUser } from 'src/app/models/user.interface';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { IDataResponse, IMessageResponse } from 'src/app/shared/interfaces/response.interface';
import { AppState } from 'src/app/reducers';


export type TokenPurpose = 'activation' | 'password-reset';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private store: Store<AppState>) { }

  register(email: string, password: string): Observable<IDataResponse> {
    return this.http.post<IDataResponse>(`${environment.apiUrl}/users`, { email, password });
  }

  login(email: string, password: string): Observable<IDataResponse> {
    return this.http.post<IDataResponse>(`${environment.apiUrl}/users/login`, { email, password });
  }

  getUser(): Observable<IUser> {
    return this.http.get<IUser>(`${environment.apiUrl}/users`, { withCredentials: true });
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
      map(({ userDetails }) => !!userDetails)
    );
  }
}
