import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Product } from "../shared/product.model";
import { AuthService } from "../../auth/shared/auth.service";
import { CartService } from "../../cart/shared/cart.service";
import { map, Subscription } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import {
    DialogCartConfirmationComponent
} from "../../cart/dialog-cart-confirmation/dialog-cart-confirmation.component";
import { DialogCartLoginComponent } from "../../cart/dialog-cart-login/dialog-cart-login.component";

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit, OnDestroy {
    @Input() product!: Product;
    @Output() detailClicked = new EventEmitter<Product>();
    private subscription?: Subscription;

    constructor(public authService: AuthService, private cartService: CartService, public dialog: MatDialog) {
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe()
    }

    addToCart() {
        if(this.authService.isLoggedIn()) {
            this.subscription = this.cartService.addItem(this.product.id).subscribe(() => this.openConfirmDialog())
        } else {
            this.openLoginDialog();
        }
    }

    openConfirmDialog() : void {
        const dialogRef = this.dialog.open(DialogCartConfirmationComponent, {data: {product: this.product}});
    }

    openLoginDialog() : void {
        const dialogRef = this.dialog.open(DialogCartLoginComponent, {data: {product: this.product}})
    }
}
