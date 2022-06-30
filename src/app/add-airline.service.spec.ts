import { TestBed } from '@angular/core/testing';

import { AddAirlineService } from './add-airline.service';

describe('AddAirlineService', () => {
  let service: AddAirlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAirlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
