import { TestBed } from '@angular/core/testing';

import { InterfaceEnumService } from './interface-enum.service';

describe('InterfaceEnumService', () => {
  let service: InterfaceEnumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterfaceEnumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
