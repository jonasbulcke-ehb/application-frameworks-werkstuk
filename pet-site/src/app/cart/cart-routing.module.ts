import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartOverviewComponent } from "./cart-overview/cart-overview.component";
import { OrderComponent } from "./order/order.component";

const routes: Routes = [
    {path: "overview", component: OrderComponent},
    {path: "", pathMatch: "full", redirectTo: "overview"}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CartRoutingModule {
}
