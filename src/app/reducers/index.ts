import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';
import { reducer as userReducer, State as UserState } from './user/user.reducer';
import { reducer as dashboardReducer, State as DashboardState } from './dashboard/dashboard.reducer';
import { reducer as ticketReducer, State as TicketState } from './ticket/ticket.reducer';

export interface AppState {
  user: UserState;
  dashboard: DashboardState;
  ticket: TicketState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
  dashboard: dashboardReducer,
  ticket: ticketReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
