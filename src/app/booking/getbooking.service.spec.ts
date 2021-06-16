import { TestBed } from '@angular/core/testing';

import { GetbookingService } from './getbooking.service';

describe('GetbookingService', () => {
  let service: GetbookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetbookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
