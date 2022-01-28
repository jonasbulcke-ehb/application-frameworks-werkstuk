import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCartLoginComponent } from './dialog-cart-login.component';

describe('DialogCartLoginComponent', () => {
  let component: DialogCartLoginComponent;
  let fixture: ComponentFixture<DialogCartLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCartLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCartLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
