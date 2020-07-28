import { TestBed } from '@angular/core/testing';

import { PermisoVerGuard } from './permiso-ver.guard';

describe('PermisoVerGuard', () => {
  let guard: PermisoVerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermisoVerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
