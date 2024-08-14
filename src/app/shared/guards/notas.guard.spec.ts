import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { notasGuard } from './notas.guard';

describe('notasGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => notasGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
