import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
        if (!this.authService.isLoggedIn()) {
            return this.router.navigate(["auth", "login"], { queryParams: { returnUrl: state.url } })
        }
        if (this.authService.isAdmin())
            return true;
        return this.router.navigateByUrl("/auth/forbidden");
    }

}
