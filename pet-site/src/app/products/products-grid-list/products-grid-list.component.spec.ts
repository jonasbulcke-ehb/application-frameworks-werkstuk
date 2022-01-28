import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsGridListComponent } from './products-grid-list.component';

describe('ProductsGridListComponent', () => {
  let component: ProductsGridListComponent;
  let fixture: ComponentFixture<ProductsGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsGridListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
