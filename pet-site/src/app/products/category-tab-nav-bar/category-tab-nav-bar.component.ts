import {
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges
} from '@angular/core';
import { Category } from "../shared/category.model";
import { Observable, of } from "rxjs";
import { Subcategory } from "../shared/subcategory.model";
import { SubcategoryService } from "../shared/subcategory.service";

@Component({
    selector: 'app-category-tab-nav-bar',
    templateUrl: './category-tab-nav-bar.component.html',
    styleUrls: ['./category-tab-nav-bar.component.css']
})
export class CategoryTabNavBarComponent implements OnInit, OnChanges {
    @Input() category!: Category;
    @Input() subcategoryName?: string | null;
    subcategories$!: Observable<Subcategory[]>;

    constructor(private subcategoryService: SubcategoryService) {
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes["category"]) {
            this.subcategories$ = this.category ? this.subcategoryService.getSubcategories(this.category?.id) : of([{id:10, name: "Food", category: {id: 1, name: "Dogs"}}])
        }
    }


}
