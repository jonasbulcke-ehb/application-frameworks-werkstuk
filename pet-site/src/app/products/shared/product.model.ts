import { Subcategory } from "./subcategory.model";

export interface Product {
    id: number;
    name: string;
    brand? : string;
    price: number;
    subcategory: Subcategory;
    shortDescription: string;
    longDescription: string;
}
