import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { supabaseSinginGuard } from './supabase-singin.guard';

describe('supabaseSinginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() =>
      supabaseSinginGuard(...guardParameters),
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
