import { TestBed } from '@angular/core/testing';

import { IpDetectImplService } from './ip-detect-impl.service';

describe('IpDetectImplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IpDetectImplService = TestBed.get(IpDetectImplService);
    expect(service).toBeTruthy();
  });
});
