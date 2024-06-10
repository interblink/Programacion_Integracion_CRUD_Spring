import { TestBed } from '@angular/core/testing';

import { SeviceListService } from './sevice-list.service';

describe('SeviceListService', () => {
  let service: SeviceListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeviceListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
