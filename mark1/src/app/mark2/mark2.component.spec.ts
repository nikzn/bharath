import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mark2Component } from './mark2.component';

describe('Mark2Component', () => {
  let component: Mark2Component;
  let fixture: ComponentFixture<Mark2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mark2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mark2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
