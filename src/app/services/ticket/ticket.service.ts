import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IDataResponse, IMessageResponse } from 'src/app/shared/interfaces/response.interface';
import { ITicket } from 'src/app/models/ticket.interface';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private http: HttpClient) { }

  create(routeId: string, startDate: Date): Observable<IDataResponse> {
    return this.http.post<IDataResponse>(
      `${environment.apiUrl}/tickets`,
      { routeId, startDate: startDate.getTime() },
      { withCredentials: true }
    );
  }

  getTickets(): Observable<Partial<ITicket>[]> {
    return this.http.get<Partial<ITicket>[]>(`${environment.apiUrl}/tickets`, { withCredentials: true });
  }

  getTicketsForUser(userId: string): Observable<Partial<ITicket>[]> {
    return this.http.get<Partial<ITicket>[]>(`${environment.apiUrl}/tickets/${userId}`, { withCredentials: true });
  }

  getTicket(id: string): Observable<ITicket> {
    return this.http.get<ITicket>(`${environment.apiUrl}/tickets/${id}`, { withCredentials: true });
  }

  deleteTicket(id: string): Observable<IMessageResponse> {
    return this.http.delete<IMessageResponse>(`${environment.apiUrl}/tickets/${id}`, { withCredentials: true });
  }
}
