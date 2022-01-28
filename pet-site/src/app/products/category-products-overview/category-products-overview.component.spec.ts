import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProductsOverviewComponent } from './category-products-overview.component';

describe('CategoryProductsOverviewComponent', () => {
  let component: CategoryProductsOverviewComponent;
  let fixture: ComponentFixture<CategoryProductsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryProductsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryProductsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
