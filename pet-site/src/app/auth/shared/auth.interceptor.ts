import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private jwtHelper: JwtHelperService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.jwtHelper.tokenGetter();
        if (token) {
            const cloned = request.clone({
                headers: request.headers.set("Authorization", `Bearer ${token}`)
            });
            return next.handle(cloned);
        }
        return next.handle(request);
    }
}
