import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCartConfirmationComponent } from './dialog-cart-confirmation.component';

describe('DialogCartConfirmationComponent', () => {
  let component: DialogCartConfirmationComponent;
  let fixture: ComponentFixture<DialogCartConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCartConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCartConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
