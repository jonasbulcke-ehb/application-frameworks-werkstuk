import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Product } from "../../products/shared/product.model";
import { Router } from "@angular/router";
import { CartService } from "../shared/cart.service";
import { DialogCartConfirmationComponent } from "../dialog-cart-confirmation/dialog-cart-confirmation.component";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-dialog-cart-login',
    templateUrl: './dialog-cart-login.component.html',
    styleUrls: ['./dialog-cart-login.component.css']
})
export class DialogCartLoginComponent implements OnInit, OnDestroy {
    private subscription?: Subscription

    constructor(@Inject(MAT_DIALOG_DATA) public data: { product: Product }, private router: Router) {
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

    onLoginClick() {
        let returnUrl = `products/${this.data.product.subcategory.category.id}/details/${this.data.product.id}`
        this.router.navigate(["auth", "login"], { queryParams: { returnUrl } });
    }
}
