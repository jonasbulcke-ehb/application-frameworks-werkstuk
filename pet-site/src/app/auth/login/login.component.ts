import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginInput } from "../shared/login-input.model";
import { AuthService } from "../shared/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css', '../shared/form-styles.css']
})
export class LoginComponent implements OnInit, OnDestroy {
    loginInput: LoginInput = { username: "", password: "" }
    passwordHidden = true;
    error?: string
    subscription = new Subscription();

    constructor(public authService: AuthService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        if (this.authService.isLoggedIn()) {
            this.router.navigateByUrl("/home")
        }
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    login(): void {
        if (this.loginInput.username && this.loginInput.password) {
            this.subscription.add(this.authService.login(this.loginInput)
                .subscribe(next => {
                    if (next) {
                        let returnUrl = this.route.snapshot.queryParams["returnUrl"];
                        this.router.navigateByUrl(returnUrl ? returnUrl : "home")
                    } else
                        this.error = 'Username and/or password does not match our records'
                })
            );
        }

    }

}
