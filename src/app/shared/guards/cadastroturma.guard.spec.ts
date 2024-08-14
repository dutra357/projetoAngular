import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { cadastroturmaGuard } from './cadastroturma.guard';

describe('cadastroturmaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => cadastroturmaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
