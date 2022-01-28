import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from "rxjs";
import { Cart } from "../shared/cart.model";
import { CartService } from "../shared/cart.service";
import { CartItem } from "../shared/cart-item.model";

@Component({
    selector: 'app-cart-overview',
    templateUrl: './cart-overview.component.html',
    styleUrls: ['./cart-overview.component.css']
})
export class CartOverviewComponent implements OnInit {
    cart$!: Observable<Cart>
    displayedColumns = ["name", "price" ,"amount", "subtotal", "delete"]

    constructor(private cartService: CartService) {
    }

    ngOnInit(): void {
        this.cart$ = this.cartService.getCart();
    }

    deleteItem(productId: number) : void {
        this.cart$ = this.cartService.deleteItem(productId);
    }


    updateAmount(productId: number, event: Event) {
        const element = event.target as HTMLInputElement;
        this.cart$ = this.cartService.updateItem(productId, Number(element.value))
    }
}