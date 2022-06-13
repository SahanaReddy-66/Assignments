import { TestBed } from '@angular/core/testing';

import { AuthhInterceptor } from './authh.interceptor';

describe('AuthhInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthhInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthhInterceptor = TestBed.inject(AuthhInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
