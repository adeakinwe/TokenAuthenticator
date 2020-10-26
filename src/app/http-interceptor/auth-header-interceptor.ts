import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, retry, tap } from 'rxjs/operators';
import { SpinnerService } from '../spinner/spinner.service';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
  constructor(private spinner: SpinnerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //Modify Headers
    this.spinner.startSpinner();

    const authToken = localStorage.getItem('userToken');
    const authReq = req.clone({
      setHeaders: { Authorization: `Token: ${authToken}`},
    });

    return next.handle(authReq).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            this.spinner.endSpinner();
          }
        },
        //Retry on failure
        //retry(2),

        //Handle errors
        (err: HttpErrorResponse) => {
          this.spinner.resetSpinner();
          alert(`Error: ${req.url}`);
          return throwError(err);
        }
        //Profiling and analysis
        // finalize(() => {
        //   const profilingMsg = `${req.method} "${req.urlWithParams}"`;
        //   console.log(profilingMsg);
        // })
      )
    );
  }
}
