import 'rxjs/add/operator/do';
import { HttpErrorResponse, HttpResponse, HttpEvent, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
export class JwtInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {    
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.auth.collectFailedRequest(request);
        }
      }
    }));
  }
}