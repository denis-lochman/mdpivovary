import { TestBed, inject } from '@angular/core/testing';

import { BreweriesService } from './breweries-service.service';

describe('BreweriesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreweriesService]
    });
  });

  it('should be created', inject([BreweriesService], (service: BreweriesService) => {
    expect(service).toBeTruthy();
  }));
});
