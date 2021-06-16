import { TestBed } from '@angular/core/testing';

import { GetServService } from './get-serv.service';

describe('GetServService', () => {
  let service: GetServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
