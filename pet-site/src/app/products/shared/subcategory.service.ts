import { Injectable } from '@angular/core';
import { Subcategory } from "./subcategory.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class SubcategoryService {
    private readonly baseUrl = "http://localhost:8080/api/categories"

    constructor(private http: HttpClient) {
    }

    getSubcategories(categoryId: number) : Observable<Subcategory[]> {
        return this.http.get<Subcategory[]>(`${this.baseUrl}/${categoryId}/subcategories`);
    }

}
