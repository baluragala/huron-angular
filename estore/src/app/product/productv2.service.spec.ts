import { TestBed } from '@angular/core/testing';

import { Productv2Service } from './productv2.service';

describe('Productv2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Productv2Service = TestBed.get(Productv2Service);
    expect(service).toBeTruthy();
  });
});
