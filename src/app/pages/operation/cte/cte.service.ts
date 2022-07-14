import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable()
export class CteService  {

  getUrl(): string {
    return `${environment.baseUrl}/cte`;
  }

  constructor(public http: HttpClient) {

  }

  save(t: any): Observable<any> {
    return this.http.post<any>(this.getUrl(), t);
  }

  find(id: any): Observable<any> {
    return this.http.get<any>(`${this.getUrl()}/${id}`);
  }

}
