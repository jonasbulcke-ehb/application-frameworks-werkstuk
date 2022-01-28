import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { DialogCartConfirmationComponent } from './dialog-cart-confirmation/dialog-cart-confirmation.component';
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { CartOverviewComponent } from './cart-overview/cart-overview.component';
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { DialogCartLoginComponent } from './dialog-cart-login/dialog-cart-login.component';
import { OrderComponent } from './order/order.component';
import { MatStepperModule } from "@angular/material/stepper";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatGridListModule } from "@angular/material/grid-list";


@NgModule({
  declarations: [
    DialogCartConfirmationComponent,
    CartOverviewComponent,
    DialogCartLoginComponent,
    OrderComponent
  ],
    imports: [
        CommonModule,
        CartRoutingModule,
        MatDividerModule,
        MatButtonModule,
        MatDialogModule,
        MatTableModule,
        MatIconModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatStepperModule,
        FormsModule,
        ReactiveFormsModule,
        MatGridListModule
    ]
})
export class CartModule { }
