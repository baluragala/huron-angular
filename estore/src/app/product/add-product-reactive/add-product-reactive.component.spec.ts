import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductReactiveComponent } from './add-product-reactive.component';

describe('AddProductReactiveComponent', () => {
  let component: AddProductReactiveComponent;
  let fixture: ComponentFixture<AddProductReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
