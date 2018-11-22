import { DashboardActionTypes, DashboardActions } from 'src/app/actions/dashboard/dashboard.actions';
import { IAirport } from 'src/app/models/airport.interface';
import { IRoute } from 'src/app/models/route.interface';

export interface State {
  getFilteredPending: boolean;
  getRoutesPending: boolean;
  fromOptions: IAirport[];
  toOptions: IAirport[];
  selectedFrom: IAirport;
  selectedTo: IAirport;
  startDate: Date;
  selectedRoute: IRoute;
  routes: IRoute[];
}

export const initialState: State = {
  getFilteredPending: false,
  getRoutesPending: false,
  fromOptions: [],
  toOptions: [],
  selectedFrom: null,
  selectedTo: null,
  startDate: null,
  selectedRoute: null,
  routes: [],
};

export function reducer(state = initialState, action: DashboardActions): State {
  switch (action.type) {
    case DashboardActionTypes.GetFilteredAirports:
    return {
      ...state,
      getFilteredPending: true,
    };

    case DashboardActionTypes.GetFilteredAirportsSuccess:
    return {
      ...state,
      getFilteredPending: false,
      fromOptions: action.payload.field === 'from'
      ? action.payload.airports
      : state.fromOptions,
      toOptions: action.payload.field === 'to'
      ? action.payload.airports
      : state.toOptions,
    };

    case DashboardActionTypes.GetFilteredAirportsFailure:
    return {
      ...state,
      getFilteredPending: false,
      fromOptions: action.payload.field === 'from'
      ? []
      : state.fromOptions,
      toOptions: action.payload.field === 'to'
      ? []
      : state.toOptions,
    };

    case DashboardActionTypes.SetSelectedAirport:
    return {
      ...state,
      selectedFrom: action.payload.field === 'from'
      ? action.payload.airport
      : state.selectedFrom,
      selectedTo: action.payload.field === 'to'
      ? action.payload.airport
      : state.selectedTo,
    };

    case DashboardActionTypes.ClearSelectedAirport:
    return {
      ...state,
      selectedFrom: action.payload.field === 'from'
      ? null
      : state.selectedFrom,
      selectedTo: action.payload.field === 'to'
      ? null
      : state.selectedTo,
    };

    case DashboardActionTypes.SwapSelectedAirport:
    return {
      ...state,
      selectedFrom: state.selectedTo,
      selectedTo: state.selectedFrom,
    };

    case DashboardActionTypes.GetRoutes:
    return {
      ...state,
      getRoutesPending: true,
    };

    case DashboardActionTypes.GetRoutesSuccess:
    return {
      ...state,
      getRoutesPending: false,
      routes: action.payload.routes,
    };

    case DashboardActionTypes.GetFilteredAirportsFailure:
    return {
      ...state,
      getRoutesPending: false,
      routes: [],
    };

    case DashboardActionTypes.ClearRoutes:
    return {
      ...state,
      routes: [],
    };

    case DashboardActionTypes.SetStartDate:
    return {
      ...state,
      startDate: action.payload,
    };

    case DashboardActionTypes.SelectRoute:
    return {
      ...state,
      selectedRoute: action.payload,
    };

    case DashboardActionTypes.ClearSelectedRoute:
    return {
      ...state,
      selectedRoute: null,
    };

    default:
      return state;
  }
}
