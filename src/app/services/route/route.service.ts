import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRoute } from 'src/app/models/route.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  getRoutes(fromCode: string, toCode: string): Observable<IRoute[]> {
    return this.http.get<IRoute[]>(`${environment.apiUrl}/routes/${fromCode}/${toCode}`);
  }

  constructor(private http: HttpClient) { }
}
