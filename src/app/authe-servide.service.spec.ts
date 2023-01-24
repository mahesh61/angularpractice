import { TestBed } from '@angular/core/testing';

import { AutheServideService } from './authe-servide.service';

describe('AutheServideService', () => {
  let service: AutheServideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutheServideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
