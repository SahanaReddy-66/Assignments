import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable()
export class AuthhInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log(Response)
    return next.handle(request).pipe(
      tap((event: any) => {
        if (event instanceof HttpResponse) {
          // http response status code
          console.log("status Code")
          console.log(event.status);
        }
      }, error => {
        // http response status code
        console.log("----response----");
        console.error("status code:");
        console.error(error.status);
        console.error(error.message);
        console.log("--- end of response---");

      })
    )
  }
}
