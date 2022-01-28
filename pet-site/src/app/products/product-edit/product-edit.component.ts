import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../shared/product.model";
import { map, Observable, Subscription, switchMap } from "rxjs";
import { ProductService } from "../shared/product.service";
import { Subcategory } from "../shared/subcategory.model";
import { SubcategoryService } from "../shared/subcategory.service";

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {
    product$!: Observable<Product>;
    subscription = new Subscription();
    subcategories$!: Observable<Subcategory[]>;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private productService: ProductService,
                private subcategoryService: SubcategoryService) {
    }

    ngOnInit(): void {
        this.product$ = this.route.params.pipe(
            switchMap(params => this.productService.getById(params["productId"]))
        );

        this.subcategories$ = this.product$.pipe(
            switchMap(product => this.subcategoryService.getSubcategories(product.subcategory.category.id))
        )
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onSubmit(product: Product): void {
        console.log(product);
        this.subscription.add(this.productService.update(product)
            .subscribe(_ => this.router.navigate(["products", "details", product.id]))
        );
    }

}
