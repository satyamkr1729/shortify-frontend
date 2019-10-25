import { TestBed } from '@angular/core/testing';

import { ShortifyService } from './shortify.service';

describe('ShortifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShortifyService = TestBed.get(ShortifyService);
    expect(service).toBeTruthy();
  });
});
