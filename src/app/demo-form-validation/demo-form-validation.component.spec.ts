import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormValidationComponent } from './demo-form-validation.component';

describe('DemoFormValidationComponent', () => {
  let component: DemoFormValidationComponent;
  let fixture: ComponentFixture<DemoFormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
