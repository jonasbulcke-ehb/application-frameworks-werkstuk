import { Pipe, PipeTransform } from '@angular/core';
import { Product } from "../shared/product.model";

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

    transform(products: Product[] | null, subcategory: string | null): Product[] {
        if (subcategory == null) {
            return products || [];
        }

        if (!products) {
            return [];
        }

        return products.filter(prod => prod.subcategory.name === subcategory);
    }

}
