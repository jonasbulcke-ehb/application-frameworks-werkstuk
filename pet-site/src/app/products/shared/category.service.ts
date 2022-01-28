import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Category } from "./category.model";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private readonly baseUrl = "http://localhost:8080/api/categories"

    constructor(private http: HttpClient) {
    }

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(this.baseUrl);
    }

    getById(id: number) : Observable<Category> {
        return this.http.get<Category>(`${this.baseUrl}/${id}`);
    }
}
