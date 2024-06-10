import { TestBed } from '@angular/core/testing';

import { ServiceregistroserviceService } from './serviceregistroservice.service';

describe('ServiceregistroserviceService', () => {
  let service: ServiceregistroserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceregistroserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
