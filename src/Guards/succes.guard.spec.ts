import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { succesGuard } from './succes.guard';

describe('succesGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => succesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
