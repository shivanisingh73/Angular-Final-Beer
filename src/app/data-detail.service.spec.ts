import { TestBed } from '@angular/core/testing';

import { DataDetailService } from './data-detail.service';

describe('DataDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataDetailService = TestBed.get(DataDetailService);
    expect(service).toBeTruthy();
  });
});
