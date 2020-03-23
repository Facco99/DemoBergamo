import { TestBed } from '@angular/core/testing';

import { MyRoutGuardService } from './my-rout-guard.service';

describe('MyRoutGuardService', () => {
  let service: MyRoutGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyRoutGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
