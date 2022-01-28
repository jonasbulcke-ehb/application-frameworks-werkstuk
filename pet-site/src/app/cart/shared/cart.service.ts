import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable, Subject, Subscription, tap, mergeWith } from "rxjs";
import { Cart } from "./cart.model";
import { Product } from "../../products/shared/product.model";
import { Address } from "./address.model";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private readonly baseUrl = "http://localhost:8080/api/cart"
    private readonly orderUrl = "http://localhost:8080/api/orders"
    private amountChangedEvent = new Subject<number>();

    constructor(private http: HttpClient) {
    }

    addItem(productId: number, amount: number = 1): Observable<Cart> {
        return this.http.post<Cart>(`${this.baseUrl}/add/${productId}/${amount}`, null)
            .pipe(
                tap(cart => this.amountChangedEvent.next(cart.totalAmount))
            )
    }

    getCart(): Observable<Cart> {
        return this.http.get<Cart>(`${this.baseUrl}`)
            .pipe(
                tap(cart => this.amountChangedEvent.next(cart.totalAmount))
            )
    }

    deleteItem(productId: number): Observable<Cart> {
        return this.http.delete<Cart>(`${this.baseUrl}/delete/${productId}`)
            .pipe(
                tap(cart => this.amountChangedEvent.next(cart.totalAmount))
            )
    }

    updateItem(productId: number, amount: number) : Observable<Cart> {
        return this.http.put<Cart>(`${this.baseUrl}/update/${productId}/${amount}`, null)
            .pipe(
                tap(cart => this.amountChangedEvent.next(cart.totalAmount))
            )
    }

    placeOrder(address: Address) : Observable<any> {
        return this.http.post(`${this.orderUrl}/place`, address)
            .pipe(
                tap(() => this.amountChangedEvent.next(0))
            )
    }

    // source: https://stackoverflow.com/questions/56609069/how-to-emit-an-event-from-grandchildren-to-grandparent-in-modern-angular
    amountChangeEventListener(): Observable<number> {
        return this.getCart().pipe(
            map(cart => cart.totalAmount),
            mergeWith(this.amountChangedEvent)
        )
    }



}
