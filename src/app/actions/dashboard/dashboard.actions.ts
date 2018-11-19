import { Action } from '@ngrx/store';

import { IQuery, IAirportResponse, IField, ISelectedAirport, IRouteParams, IRouteResponse } from 'src/app/models/dashboard.interface';
import { IRoute } from 'src/app/models/route.interface';

export enum DashboardActionTypes {
  GetFilteredAirports = '[Dashboard] Get Filtered Airports',
  GetFilteredAirportsSuccess = '[Dashboard] Get Filtered Airports Success',
  GetFilteredAirportsFailure = '[Dashboard] Get Filtered Airports Failure',

  SetSelectedAirport = '[Dashboard] Set Selected Airport',
  ClearSelectedAirport = '[Dashboard] Clear Selected Airport',
  SwapSelectedAirport = '[Dashboard] Swap Selected Airport',

  GetRoutes = '[Dashboard] Get Routes',
  GetRoutesSuccess = '[Dashboard] Get Routes Success',
  GetRoutesFailure = '[Dashboard] Get Routes Failure',
  ClearRoutes = '[Dashboard] Clear Routes',

  SelectRoute = '[Dashboard] Select Route',
  ClearSelectedRoute = '[Dashboard] Clear Selected Route',

  SetStartDate = '[Dashboard] Set Start Date',
}

export class GetFilteredAirports implements Action {
  readonly type = DashboardActionTypes.GetFilteredAirports;

  constructor(public payload: IQuery) {}
}

export class GetFilteredAirportsSuccess implements Action {
  readonly type = DashboardActionTypes.GetFilteredAirportsSuccess;

  constructor(public payload: IAirportResponse) {}
}

export class GetFilteredAirportsFailure implements Action {
  readonly type = DashboardActionTypes.GetFilteredAirportsFailure;

  constructor(public payload: IField) {}
}

type GetFilteredAirportsType = GetFilteredAirports & GetFilteredAirportsSuccess & GetFilteredAirportsFailure;

export class SetSelectedAirport implements Action {
  readonly type = DashboardActionTypes.SetSelectedAirport;

  constructor(public payload: ISelectedAirport) {}
}

export class ClearSelectedAirport implements Action {
  readonly type = DashboardActionTypes.ClearSelectedAirport;

  constructor(public payload: IField) {}
}

export class SwapSelectedAirport implements Action {
  readonly type = DashboardActionTypes.SwapSelectedAirport;
}

type SelectedAirportType =
SetSelectedAirport &
ClearSelectedAirport &
SwapSelectedAirport;

export class GetRoutes implements Action {
  readonly type = DashboardActionTypes.GetRoutes;

  constructor(public payload: IRouteParams) {}
}

export class GetRoutesSuccess implements Action {
  readonly type = DashboardActionTypes.GetRoutesSuccess;

  constructor(public payload: IRouteResponse) {}
}

export class GetRoutesFailure implements Action {
  readonly type = DashboardActionTypes.GetRoutesFailure;
}

export class ClearRoutes implements Action {
  readonly type = DashboardActionTypes.ClearRoutes;
}

type GetRoutesType = GetRoutes & GetRoutesSuccess & GetRoutesFailure & ClearRoutes;

export class SelectRoute implements Action {
  readonly type = DashboardActionTypes.SelectRoute;

  constructor(public payload: IRoute) {}
}

export class ClearSelectedRoute implements Action {
  readonly type = DashboardActionTypes.ClearSelectedRoute;
}

type SelectRouteType = SelectRoute & ClearSelectedRoute;

export class SetStartDate implements Action {
  readonly type = DashboardActionTypes.SetStartDate;

  constructor(public payload: Date) {}
}

type SetStartDateType = SetStartDate;

export type DashboardActions =
GetFilteredAirportsType &
SelectedAirportType &
GetRoutesType &
SelectRouteType &
SetStartDateType;
