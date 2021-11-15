import { TestBed } from '@angular/core/testing';

import { MasterMindService } from './master-mind.service';

describe('MasterMindService', () => {
  let service: MasterMindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterMindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
