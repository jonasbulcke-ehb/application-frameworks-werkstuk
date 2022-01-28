import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { MatListModule } from "@angular/material/list";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFilterPipe } from './product-filter/product-filter.pipe';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsGridListComponent } from './products-grid-list/products-grid-list.component';
import { CategoryTabNavBarComponent } from './category-tab-nav-bar/category-tab-nav-bar.component';
import { CategoryProductsOverviewComponent } from './category-products-overview/category-products-overview.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";


@NgModule({
    declarations: [
        ProductDetailComponent,
        ProductFilterPipe,
        ProductCardComponent,
        ProductsGridListComponent,
        CategoryTabNavBarComponent,
        CategoryProductsOverviewComponent,
        ProductCreateComponent,
        ProductFormComponent,
        ProductEditComponent
    ],
    exports: [
        ProductsGridListComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatGridListModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        FormlyModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
    ]
})
export class ProductsModule { }
