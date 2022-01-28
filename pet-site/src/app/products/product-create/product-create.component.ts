import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from "../shared/product.model";
import { ActivatedRoute, Router } from "@angular/router";
import { Category } from "../shared/category.model";
import { Observable, Subscription, switchMap } from "rxjs";
import { Subcategory } from "../shared/subcategory.model";
import { SubcategoryService } from "../shared/subcategory.service";
import { ProductService } from "../shared/product.service";

@Component({
    selector: 'app-product-create',
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit, OnDestroy {
    subcategories$?: Observable<Subcategory[]>
    productSubscription = new Subscription();
    category!: Category;
    product!: Product;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private subcategoryService: SubcategoryService,
        private productService: ProductService
    ) {

    }

    ngOnInit(): void {
        this.subcategories$ = this.route.params.pipe(
            switchMap(params => this.subcategoryService.getSubcategories(params["categoryId"]))
        )
        this.category = {id: this.route.snapshot.params["categoryId"]} as Category;
        this.product = {
            id: 0,
            name: "",
            shortDescription: "",
            longDescription: "",
            price: 0,
            subcategory: {
                id: 0,
                name: "",
                category: this.category
            },
        }
    }

    ngOnDestroy(): void {
        this.productSubscription.unsubscribe();
    }


    onSubmit(product: Product) {
        this.productSubscription.add(this.productService.create(product)
            .subscribe(() => this.router.navigate(["../"], { relativeTo: this.route }))
        );
    }
}
