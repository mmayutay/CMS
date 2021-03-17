import { TestBed } from '@angular/core/testing';

import { EventTraningServiceService } from './event-traning-service.service';

describe('EventTraningServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventTraningServiceService = TestBed.get(EventTraningServiceService);
    expect(service).toBeTruthy();
  });
});
