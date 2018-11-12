import { DashboardActionTypes, DashboardActions } from 'src/app/actions/dashboard/dashboard.actions';
import { IAirportBrief } from 'src/app/models/airport.interface';

export interface State {
  getFilteredPending: boolean;
  fromOptions: IAirportBrief[];
  toOptions: IAirportBrief[];
  selectedFrom: IAirportBrief;
  selectedTo: IAirportBrief;
}

export const initialState: State = {
  getFilteredPending: false,
  fromOptions: [],
  toOptions: [],
  selectedFrom: null,
  selectedTo: null,
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

    default:
      return state;
  }
}
