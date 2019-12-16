import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import {from} from 'rxjs';
import { map, flatMap } from 'rxjs/operators';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     
    const token$ = from(this.auth.getTokenSilently());
    const res$ = token$.pipe(
        flatMap(token => {
            request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
            });
            return next.handle(request);
    }));
    return res$;
  }
}