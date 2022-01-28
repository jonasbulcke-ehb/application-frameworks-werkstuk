import { Component, DoCheck, EventEmitter, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { map, Observable, Subscription } from "rxjs";
import { Category } from "../products/shared/category.model";
import { CategoryService } from "../products/shared/category.service";
import { AuthService } from "../auth/shared/auth.service";
import { CartService } from "../cart/shared/cart.service";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
    @Output() apiAvailable = new EventEmitter<boolean>();
    amountInCart = 0;
    categories$!: Observable<Category[]>;
    private subscription = new Subscription();
    private cartSubscription?: Subscription;

    constructor(
        private categoryService: CategoryService,
        public authService: AuthService,
        private cartService: CartService) {
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    ngOnInit(): void {
        this.categories$ = this.categoryService.getCategories();
        this.subscription.add(
            this.categories$.subscribe(categories => this.apiAvailable.emit(categories.length > 0))
        );

        this.cartSubscription = this.cartService.amountChangeEventListener()
            .subscribe(
                amount => this.amountInCart = amount,
            );

        if(this.authService.isLoggedIn() && this.amountInCart == 0) {
            this.subscription.add(
                this.cartService.getCart().subscribe(
                    cart => this.amountInCart = cart.totalAmount
                )
            )
        }
    }

    logout() {
        this.authService.logout();
        this.cartSubscription?.unsubscribe();
    }
}
