import { Component, Inject, OnInit } from '@angular/core';
import { Product } from "../../products/shared/product.model";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'app-dialog-cart-confirmation',
    templateUrl: './dialog-cart-confirmation.component.html',
    styleUrls: ['./dialog-cart-confirmation.component.css']
})
export class DialogCartConfirmationComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public data: { product: Product }) {
    }

    ngOnInit(): void {
    }
}
