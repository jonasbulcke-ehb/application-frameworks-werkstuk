import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription } from "rxjs";
import { CartService } from "../shared/cart.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Address } from "../shared/address.model";

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {
    totalPrice!: Observable<number>;
    address!: Address;
    addressFormGroup!: FormGroup
    subscription?: Subscription;
    isCartEmpty!: Observable<boolean>

    constructor(private cartService: CartService, private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.isCartEmpty = this.cartService.getCart()
            .pipe(
                map(cart => cart.totalAmount <= 0)
            )
        this.addressFormGroup = this.fb.group({
            addressLine1: ["", Validators.required],
            addressLine2: [""],
            zipcode: ['', [Validators.min(1000), Validators.max(9999), Validators.required]],
            city: ["", Validators.required]
        })
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

    getTotalPrice() {
        this.totalPrice = this.cartService.getCart()
            .pipe(map(cart => cart.total))
    }

    placeOrder() {
        this.subscription = this.cartService.placeOrder(this.address).subscribe();
    }

    submitAddress() {
        this.address = this.addressFormGroup.value;
    }

    hasError(name: string) : boolean {
        const field = this.addressFormGroup.get(name)!;
        return field.invalid;
    }

}
