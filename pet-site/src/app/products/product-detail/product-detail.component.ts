import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription, switchMap } from "rxjs";
import { Product } from "../shared/product.model";
import { ProductService } from "../shared/product.service";
import { CartItem } from "../../cart/shared/cart-item.model";
import { MatDialog } from "@angular/material/dialog";
import { CartService } from "../../cart/shared/cart.service";
import {
    DialogCartConfirmationComponent
} from "../../cart/dialog-cart-confirmation/dialog-cart-confirmation.component";
import { AuthService } from "../../auth/shared/auth.service";
import { DialogCartLoginComponent } from "../../cart/dialog-cart-login/dialog-cart-login.component";

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    product!: Product;
    productAmount: number = 1;
    subscription = new Subscription();

    constructor(private route: ActivatedRoute,
                public authService: AuthService,
                private productService: ProductService,
                private cartService: CartService,
                private dialog: MatDialog
    ) {

    }

    ngOnInit(): void {
        this.subscription.add(this.route.params
            .pipe(switchMap(params => this.productService.getById(params["productId"])))
            .subscribe(product => this.product = product));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    addToCart() {
        if (this.authService.isLoggedIn() && this.productAmount >= 1) {
            this.subscription.add(this.cartService.addItem(this.product.id, this.productAmount)
                .subscribe(() =>
                    this.dialog.open(DialogCartConfirmationComponent, { data: { product: this.product } }))
            )
        } else {
            this.dialog.open(DialogCartLoginComponent, { data: { product: this.product } })
        }
    }
}
