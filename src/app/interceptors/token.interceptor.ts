import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(public auth : AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): import("rxjs").Observable<HttpEvent<any>> {
        let request = req.clone({
            setHeaders: {
                Authorization : `Token ${this.auth.getToken()}`
            }
        });

        return next.handle(request);
    }

}
