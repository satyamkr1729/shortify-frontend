import { TestBed } from '@angular/core/testing';

import { IpDetectService } from './ip-detect.service';

describe('IpDetectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IpDetectService = TestBed.get(IpDetectService);
    expect(service).toBeTruthy();
  });
});
