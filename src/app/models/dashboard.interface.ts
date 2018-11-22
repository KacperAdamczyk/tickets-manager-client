import { IAirport } from './airport.interface';
import { IRoute } from './route.interface';

export type Fields = 'from' | 'to';

export interface IField {
  field: Fields;
}

export interface IQuery extends IField {
  query: string;
  exclude?: string;
}

export interface IAirportResponse extends IField {
  airports: IAirport[];
}

export interface ISelectedAirport extends IField {
  airport: IAirport;
}

export interface IRouteParams {
  fromCode: string;
  toCode: string;
}

export interface IRouteResponse {
  routes: IRoute[];
}
