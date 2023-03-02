import { TestBed } from '@angular/core/testing';

import { LayoutDataService } from './layout-data.service';

describe('LayoutDataService', () => {
  let service: LayoutDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
