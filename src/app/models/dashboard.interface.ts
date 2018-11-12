import { IAirportBrief } from './airport.interface';

export type Fields = 'from' | 'to';

export interface IField {
  field: Fields;
}

export interface IQuery extends IField {
  query: string;
  exclude?: string;
}

export interface IAirportResponse extends IField {
  airports: IAirportBrief[];
}

export interface ISelectedAirport extends IField {
  airport: IAirportBrief;
}
