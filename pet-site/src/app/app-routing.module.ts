import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CartModule } from "./cart/cart.module";

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "/home" },
    { path: "home", component: HomeComponent },
    {
        path: "products",
        loadChildren: () => import("./products/products.module").then(module => module.ProductsModule)
    },
    {
        path: "auth",
        loadChildren: () => import("./auth/auth.module").then(module => module.AuthModule)
    },
    {
        path: "cart",
        loadChildren: () => import("./cart/cart.module").then(module => module.CartModule)
        // loadChildren: () => CartModule
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
