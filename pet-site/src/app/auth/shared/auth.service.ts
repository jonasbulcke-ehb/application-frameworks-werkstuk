/**
 * sources:
 *  - https://blog.angular-university.io/angular-jwt-authentication/
 *  - https://www.c-sharpcorner.com/article/authentication-and-authorization-in-angular/
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { LoginInput } from "./login-input.model";
import { catchError, map, mergeWith, Observable, of, Subject, switchMap, tap } from "rxjs";
import { AuthResponse } from "./auth-response.model";
import { JwtHelperService } from "@auth0/angular-jwt";
import { RegisterInput } from "./register-input.model";
import { Router } from "@angular/router";
import { CartService } from "../../cart/shared/cart.service";
import { Cart } from "../../cart/shared/cart.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private baseUrl = "http://localhost:8080/api"

    constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private router: Router, private cartService: CartService) {
    }

    login({ username, password }: LoginInput): Observable<Cart | null> {
        const params = new HttpParams({ fromObject: { username, password } });
        return this.http.post<AuthResponse>(`${this.baseUrl}/login`, params)
            .pipe(
                map(this.saveToken),
                catchError(() => of(false)),
            )
            .pipe(
                switchMap((next) => next ? this.cartService.getCart() : of(null))
            )
    }

    register({ username, email, password }: RegisterInput): Observable<boolean> {
        const params = new HttpParams({ fromObject: { username, email, password } });
        return this.http.post<AuthResponse>(`${this.baseUrl}/register`, params)
            .pipe(
                map(this.saveToken),
                catchError(() => of(false))
            )

    }


    private saveToken(tokens: AuthResponse) {
        localStorage.setItem("_bearer", tokens.accessToken);
        return true;
    }

    isLoggedIn(): boolean {
        return !this.jwtHelper.isTokenExpired();
    }

    getUsername(): string {
        let token = this.jwtHelper.tokenGetter();
        return token ? this.jwtHelper.decodeToken(token)["sub"] : null;
    }

    isAdmin(): boolean {
        let token = this.jwtHelper.tokenGetter();
        return token ? this.jwtHelper.decodeToken(token)["role"] == "Admin" : false;
    }


    logout() {
        localStorage.removeItem("_bearer");
        this.router.navigateByUrl("/home")
    }
}

