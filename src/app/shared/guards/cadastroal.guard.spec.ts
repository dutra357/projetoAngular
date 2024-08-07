import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { cadastroalGuard } from './cadastroal.guard';

describe('cadastroalGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => cadastroalGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
