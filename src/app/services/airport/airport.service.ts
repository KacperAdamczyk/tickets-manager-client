import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IAirport } from 'src/app/models/airport.interface';
import { environment } from 'src/environments/environment';

interface Params {
  limit: string;
  exclude?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor(private http: HttpClient) { }

  getFiltered(query: string, exclude?: string, limit: number = 10): Observable<IAirport[]> {
    let params = new HttpParams().set('limit', limit.toFixed(0));

    if (exclude) {
      params = params.set('exclude', exclude);
    }

    return this.http.get<IAirport[]>(`${environment.apiUrl}/airports/${query}`, { params });
  }
}
