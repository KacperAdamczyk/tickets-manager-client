import { IAirport } from './airport.interface';
import { IRouteFull, IRoute } from './route.interface';

export interface ITicket {
  id: string;
  sourceAirport: IAirport;
  destinationAirport: IAirport;
  route: IRoute | IRouteFull;
  startDate: string | Date;
  purchaseDate: string;
}
