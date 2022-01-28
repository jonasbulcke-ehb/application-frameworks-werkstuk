import { Product } from "../../products/shared/product.model";

export interface CartItem {
    id: number;
    amount: number;
    product: Product;
    subtotal: number;
}
