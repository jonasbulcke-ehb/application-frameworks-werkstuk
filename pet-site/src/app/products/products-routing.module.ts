import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { CategoryProductsOverviewComponent } from "./category-products-overview/category-products-overview.component";
import { ProductCreateComponent } from "./product-create/product-create.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { AdminGuard } from "../auth/shared/admin.guard";
import { AuthGuard } from "../auth/shared/auth.guard";

const routes: Routes = [
    { path: ":categoryId", component: CategoryProductsOverviewComponent },
    { path: ":categoryId/details/:productId", component: ProductDetailComponent },
    { path: ":categoryId/create", component: ProductCreateComponent, canActivate: [AdminGuard] },
    { path: ":categoryId/edit/:productId", component: ProductEditComponent, canActivate: [AdminGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {
}
