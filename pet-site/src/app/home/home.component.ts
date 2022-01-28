import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Product } from "../products/shared/product.model";
import { ProductService } from "../products/shared/product.service";
import { Router } from "@angular/router";
import { AuthService } from "../auth/shared/auth.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    products$!: Observable<Product[]>

    constructor(private productService: ProductService, public authService: AuthService) {
    }

    ngOnInit(): void {
        this.products$ = this.productService.getAll();
    }
}
