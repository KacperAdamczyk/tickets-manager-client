import { Action } from '@ngrx/store';

import { IQuery, IAirportResponse, IField, ISelectedAirport } from 'src/app/models/dashboard.interface';

export enum DashboardActionTypes {
  GetFilteredAirports = '[Dashboard] Get Filtered Airports',
  GetFilteredAirportsSuccess = '[Dashboard] Get Filtered Airports Success',
  GetFilteredAirportsFailure = '[Dashboard] Get Filtered Airports Failure',

  SetSelectedAirport = '[Dashboard] Set Selected Airport',
  ClearSelectedAirport = '[Dashboard] Clear Selected Airport',
  SwapSelectedAirport = '[Dashboard] Swap Selected Airport',
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

type SetSelectedAirportType =
SetSelectedAirport &
ClearSelectedAirport &
SwapSelectedAirport;

export type DashboardActions =
GetFilteredAirportsType &
SetSelectedAirportType;
