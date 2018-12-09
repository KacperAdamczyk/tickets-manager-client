import { IRoute } from './route.interface';

export interface ITicket {
  id: string;
  route: Partial<IRoute>;
  startDate: string | Date;
  purchaseDate: string | Date;
}

export interface ITicketRequest {
  routeId: string;
  startDate: Date;
}
