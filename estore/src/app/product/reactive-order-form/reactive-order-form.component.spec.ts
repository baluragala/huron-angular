import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveOrderFormComponent } from './reactive-order-form.component';

describe('ReactiveOrderFormComponent', () => {
  let component: ReactiveOrderFormComponent;
  let fixture: ComponentFixture<ReactiveOrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveOrderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
