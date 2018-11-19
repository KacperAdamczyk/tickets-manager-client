import { IAirport } from './airport.interface';
import { IRoute } from './route.interface';

export interface ITicket {
  source: IAirport;
  destination: IAirport;
  route: IRoute;
  date: Date;
}
