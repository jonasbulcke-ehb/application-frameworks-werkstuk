import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from "../shared/product.model";

@Component({
    selector: 'app-products-grid-list',
    templateUrl: './products-grid-list.component.html',
    styleUrls: ['./products-grid-list.component.css']
})
export class ProductsGridListComponent implements OnInit {
    @Input() products!: Product[]
    @Output() productClicked = new EventEmitter<Product>();

    constructor() {
    }

    ngOnInit(): void {
    }

    onProductClicked(product: Product) {
        this.productClicked.emit(product);
    }

}
