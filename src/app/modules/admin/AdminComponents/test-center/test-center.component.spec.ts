import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCenterComponent } from './test-center.component';

describe('TestCenterComponent', () => {
  let component: TestCenterComponent;
  let fixture: ComponentFixture<TestCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCenterComponent]
    });
    fixture = TestBed.createComponent(TestCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
