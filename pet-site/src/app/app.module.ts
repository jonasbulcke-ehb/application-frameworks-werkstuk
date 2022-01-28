import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { ProductsModule } from './products/products.module';
import { MatButtonModule } from "@angular/material/button";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { MatIconModule } from "@angular/material/icon";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyMaterialModule } from "@ngx-formly/material";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { AuthModule } from './auth/auth.module';
import { JwtModule } from "@auth0/angular-jwt";
import { MatMenuModule } from "@angular/material/menu";
import { MatBadgeModule } from "@angular/material/badge";
import { AuthInterceptor } from "./auth/shared/auth.interceptor";
import { CartModule } from './cart/cart.module';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        ProductsModule,
        MatButtonModule,
        HttpClientModule,
        MatIconModule,
        ReactiveFormsModule,
        FormlyModule.forRoot({
            validationMessages: [
                { name: "required", message: 'This field is required' },
                { name: "notBlank", message: "This field is required" }
            ],
            validators: [
                { name: "notBlank", validation: c => c.value.trim() != "" ? null : { notBlank: true } }
            ]
        }),
        FormlyMaterialModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        AuthModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: () => localStorage.getItem("_bearer"),
                skipWhenExpired: true
            }
        }),
        MatMenuModule,
        MatBadgeModule,
        CartModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
