import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, switchMap } from "rxjs";
import { Category } from "../shared/category.model";
import { Product } from "../shared/product.model";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryService } from "../shared/category.service";
import { ProductService } from "../shared/product.service";
import { AuthService } from "../../auth/shared/auth.service";

@Component({
    selector: 'app-category-products-overview',
    templateUrl: './category-products-overview.component.html',
    styleUrls: ['./category-products-overview.component.css']
})
export class CategoryProductsOverviewComponent implements OnInit, OnDestroy {
    category!: Category;
    subcategoryName!: string | null;
    products$!: Observable<Product[]>

    private categorySubscription!: Subscription;
    private subscription!: Subscription;

    constructor(private route: ActivatedRoute,
                private categoryService: CategoryService,
                private productService: ProductService,
                public authService: AuthService) {
    }

    ngOnInit(): void {
        this.categorySubscription = this.route.params.pipe(
            switchMap(params => this.categoryService.getById(params["categoryId"]))
        ).subscribe(category => this.category = category);

        this.subscription = this.route.queryParams.subscribe(params => this.subcategoryName = params["subcategory"])

        this.products$ = this.route.params.pipe(
            switchMap(params => {
                let subcategoryId: number = params["subcategoryId"];
                let categoryId: number = params["categoryId"]
                if (subcategoryId == undefined) {
                    return this.productService.getAllByCategoryId(categoryId);
                } else {
                    return this.productService.getAllBySubcategoryId(categoryId, subcategoryId)
                }
            })
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
        this.categorySubscription.unsubscribe();
    }
}
