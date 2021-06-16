import { TestBed } from '@angular/core/testing';

import { QservService } from './qserv.service';

describe('QservService', () => {
  let service: QservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
