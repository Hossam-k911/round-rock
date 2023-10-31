import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestyMonialsComponent } from './testy-monials.component';

describe('TestyMonialsComponent', () => {
  let component: TestyMonialsComponent;
  let fixture: ComponentFixture<TestyMonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestyMonialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestyMonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
