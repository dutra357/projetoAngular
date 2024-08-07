import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { cadastrodocGuard } from './cadastrodoc.guard';

describe('cadastrodocGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => cadastrodocGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
