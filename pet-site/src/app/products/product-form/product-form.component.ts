import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { map, Observable } from "rxjs";
import { Subcategory } from "../shared/subcategory.model";
import { FormControl, FormGroup } from "@angular/forms";
import { Product } from "../shared/product.model";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnChanges {
    @Input() product!: Product;
    @Input() subcategories?: Observable<Subcategory[]>;
    @Output() productSubmitted = new EventEmitter<Product>();
    form = new FormGroup({});
    options: FormlyFormOptions = {};
    fields!: FormlyFieldConfig[];

    constructor() {
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes["subcategories"])
            this.initFields();
    }

    onSubmit(): void {
        if (this.form.invalid) {
            return;
        }
        this.productSubmitted.emit(this.product);
    }

    private initFields(): void {
        let options$ = this.subcategories?.pipe(
            map(subcategories => subcategories.map(subcategory => ({ label: subcategory.name, value: subcategory })))
        )
        this.fields = [
            {
                key: 'name',
                type: 'input',
                templateOptions: {
                    label: 'Name',
                    required: true
                }, validators: {
                    validation: ['notBlank']
                }
            }, {
                key: "brand",
                type: "input",
                templateOptions: {
                    label: "Brand",
                }
            }, {
                key: "price",
                type: "input",
                templateOptions: {
                    label: "Price",
                    type: "number",
                    step: 0.05,
                    min: 0,
                    required: true,
                },
            }, {
                key: "subcategory",
                type: "select",
                templateOptions: {
                    label: "Subcategory",
                    required: true,
                    options: options$,
                }

            }, {
                key: "shortDescription",
                type: "input",
                templateOptions: {
                    label: "Short description",
                    required: true,
                    maxLength: 120,
                }, validators: {
                    validation: ['notBlank']
                }
            }, {
                key: "longDescription",
                type: "textarea",
                templateOptions: {
                    label: "Long description",
                    required: true,
                    autosize: true,
                    autosizeMinRows: 5,
                    autosizeMaxRows: 10
                }, validators: {
                    validation: ['notBlank']
                }
            }
        ]
    }


}
