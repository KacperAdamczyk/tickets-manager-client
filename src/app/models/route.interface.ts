import { IAirport } from './airport.interface';

export interface IRoute {
  _id: string;
  startTime: number | string;
  endTime: number | string;
  sourceIata: string;
  destinationIata: string;
  distance: number;
}

export interface IRouteFull {
  _id: string;
  startTime: string;
  endTime: string;
  sourceAirport: IAirport;
  destinationAirport: IAirport;
  distance: number;
}
