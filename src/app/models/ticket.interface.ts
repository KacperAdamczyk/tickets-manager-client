import { IAirport } from './airport.interface';
import { IRouteFull, IRoute } from './route.interface';

export interface ITicket {
  id: string;
  route: Partial<IRoute & IRouteFull>;
  startDate: string | Date;
  purchaseDate: string;
}

export interface ITicketRequest {
  routeId: string;
  startDate: Date;
}
