import { TestBed } from '@angular/core/testing';

import { ShortifyServiceImplService } from './shortify-service-impl.service';

describe('ShortifyServiceImplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShortifyServiceImplService = TestBed.get(ShortifyServiceImplService);
    expect(service).toBeTruthy();
  });
});
