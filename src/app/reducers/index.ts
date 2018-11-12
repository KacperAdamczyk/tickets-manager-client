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

export interface AppState {
  user: UserState;
  dashboard: DashboardState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
  dashboard: dashboardReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
