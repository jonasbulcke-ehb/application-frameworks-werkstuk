import { Component, OnDestroy, OnInit } from '@angular/core';
import { RegisterInput } from "../shared/register-input.model";
import { AuthService } from "../shared/auth.service";
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css', '../shared/form-styles.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
    registerInput: RegisterInput = { username: "", email: "", password: "" }
    passwordHidden = true;
    error?: string;
    subscription = new Subscription();

    constructor(public authService: AuthService, private router: Router) {

    }

    ngOnInit(): void {
        if(this.authService.isLoggedIn()) {
            this.router.navigateByUrl("/home")
        }
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public register(): void {
        if (this.isInputValid())
            this.subscription.add(this.authService.register(this.registerInput)
                .subscribe(next => {
                    if (next)
                        this.router.navigateByUrl("/home");
                    else
                        this.error = 'Username and/or email address is already taken'
                })
            );
    }

    private isInputValid(): boolean {
        for (let key in this.registerInput) {
            if (!this.registerInput[key as keyof RegisterInput])
                return false;
        }

        return true;
    }

}


