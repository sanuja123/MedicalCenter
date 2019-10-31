import { TestBed, inject } from '@angular/core/testing';

import { PhamacistService } from './phamacist.service';

describe('PhamacistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhamacistService]
    });
  });

  it('should be created', inject([PhamacistService], (service: PhamacistService) => {
    expect(service).toBeTruthy();
  }));
});
