import { IAirport } from './airport.interface';

export interface IRoute {
  _id: string;
  startTime: number | string | Date;
  endTime: number | string | Date;
  sourceIata?: string;
  destinationIata?: string;
  sourceAirport?: IAirport;
  destinationAirport?: IAirport;
  distance: number;
}
