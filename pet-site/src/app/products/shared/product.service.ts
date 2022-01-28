import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private readonly baseUrl = "http://localhost:8080/api"

    constructor(private http: HttpClient) {
    }

    getAllByCategoryId(categoryId: number): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.baseUrl}/categories/${categoryId}/products`);
    }

    getAllBySubcategoryId(categoryId: number, subcategoryId: number): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.baseUrl}/categories/${categoryId}/subcategories/${subcategoryId}/products`);
    }

    getByCategoryId(categoryId: number, productId: number): Observable<Product> {
        return this.http.get<Product>(`${this.baseUrl}/categories/${categoryId}/products/${productId}`);
    }

    getAll(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.baseUrl}/products`)
    }

    getById(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.baseUrl}/products/${id}`);
    }

    create(product: Product): Observable<Product> {
        let categoryId = product.subcategory.category.id;
        let subcategoryId = product.subcategory.id;
        return this.http.post<Product>(
            `${this.baseUrl}/categories/${categoryId}/subcategories/${subcategoryId}/products`, product
        );
    }

    update(product: Product): Observable<Product> {
        let categoryId = product.subcategory.category.id;
        let subcategoryId = product.subcategory.id;
        return this.http.put<Product>(
            `${this.baseUrl}/categories/${categoryId}/subcategories/${subcategoryId}/products/${product.id}`, product
        );
    }
}
