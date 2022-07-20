import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Alerts } from '../../../@core/data/alerts';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  private path = './assets/data/alerts.json'

  constructor(public http: HttpClient) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

      switch (true) {
        case url.endsWith('/occurrence') && method === 'POST':{
          return this.ok()
        }

        case url.endsWith('/blacklist') && method === 'POST':{
          return this.ok()
        }

        case url.endsWith('/alert') && method === 'GET':
          var response = new Subject<HttpResponse<any>>();
          this.http.get(this.path).subscribe(
            (res: Alerts[]) =>{
              response.next(new HttpResponse(
                { status: 200, body: res }
              ))
          }
        )

        return response.asObservable()

        default:
          return next.handle(request);
    }
  }



  private getAlerts(): Observable<HttpResponse<any>> {
    return this.ok([{},{},{}])
  }

  private ok(body?: any): Observable<HttpResponse<any>> {
    return of(new HttpResponse({ status: 200, body }))
  }

}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
