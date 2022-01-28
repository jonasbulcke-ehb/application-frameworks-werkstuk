import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTabNavBarComponent } from './category-tab-nav-bar.component';

describe('CategoryTabNavBarComponent', () => {
  let component: CategoryTabNavBarComponent;
  let fixture: ComponentFixture<CategoryTabNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryTabNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTabNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
