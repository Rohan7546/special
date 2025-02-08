import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentineComponent } from './valentine.component';

describe('ValentineComponent', () => {
  let component: ValentineComponent;
  let fixture: ComponentFixture<ValentineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValentineComponent]
    });
    fixture = TestBed.createComponent(ValentineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
