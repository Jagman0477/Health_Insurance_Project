import { TestBed } from '@angular/core/testing';

import { TestCenterService } from './test-center.service';

describe('TestCenterService', () => {
  let service: TestCenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestCenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
