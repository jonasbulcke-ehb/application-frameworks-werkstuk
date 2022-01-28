import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { RegisterComponent } from './register/register.component';
import { FormlyModule } from "@ngx-formly/core";
import { MatIconModule } from "@angular/material/icon";
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForbiddenComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatGridListModule,
        FormsModule,
        FormlyModule,
        MatIconModule,
        MatProgressBarModule,
        MatProgressSpinnerModule
    ]
})
export class AuthModule { }

// source: https://codeburst.io/jwt-authentication-in-angular-48cfa882832c
